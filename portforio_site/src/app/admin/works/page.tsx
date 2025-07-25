"use client";
import { useState, useEffect } from "react";
import { db } from "../../../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { Work } from "../../../data/works";

export default function AdminWorksPage() {
  const [works, setWorks] = useState<Work[]>([]);
  const [form, setForm] = useState<{
    id?: string;
    title?: string;
    description?: string;
    image?: string;
    techStack?: string;
    githubUrl?: string;
    demoUrl?: string;
    period?: string;
    role?: string;
  }>({});
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Firestoreから作品一覧を取得（リアルタイム反映）
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "works"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Work[];
      setWorks(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description) return;
    const newWork: Omit<Work, "id"> = {
      title: form.title,
      description: form.description,
      image: form.image ? [form.image] : [],
      techStack: form.techStack ? form.techStack.split(",") : [],
      githubUrl: form.githubUrl,
      demoUrl: form.demoUrl,
      period: form.period,
      role: form.role,
    };
    if (editId) {
      await updateDoc(doc(db, "works", editId), newWork);
      setEditId(null);
    } else {
      await addDoc(collection(db, "works"), newWork);
    }
    setForm({});
  };

  const handleEdit = (work: Work) => {
    setForm({
      id: work.id,
      title: work.title,
      description: work.description,
      image: work.image[0] || "",
      techStack: work.techStack.join(","),
      githubUrl: work.githubUrl,
      demoUrl: work.demoUrl,
      period: work.period,
      role: work.role,
    });
    setEditId(work.id);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "works", id));
    if (editId === id) {
      setEditId(null);
      setForm({});
    }
  };

  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>作品管理（Admin）</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: 8 }}>
        <input name="title" placeholder="タイトル" value={form.title || ""} onChange={handleChange} required style={{ padding: 8 }} />
        <textarea name="description" placeholder="説明" value={form.description || ""} onChange={handleChange} required style={{ padding: 8 }} />
        <input name="image" placeholder="画像URL（1つ）" value={form.image || ""} onChange={handleChange} style={{ padding: 8 }} />
        <input name="techStack" placeholder="技術（カンマ区切り）" value={form.techStack || ""} onChange={handleChange} style={{ padding: 8 }} />
        <input name="githubUrl" placeholder="GitHub URL" value={form.githubUrl || ""} onChange={handleChange} style={{ padding: 8 }} />
        <input name="demoUrl" placeholder="デモURL" value={form.demoUrl || ""} onChange={handleChange} style={{ padding: 8 }} />
        <input name="period" placeholder="制作時期" value={form.period || ""} onChange={handleChange} style={{ padding: 8 }} />
        <input name="role" placeholder="担当範囲" value={form.role || ""} onChange={handleChange} style={{ padding: 8 }} />
        <button type="submit" style={{ padding: "0.5rem 1.5rem", background: "#0070f3", color: "#fff", border: "none", borderRadius: 4, fontWeight: "bold" }}>{editId ? "更新" : "追加"}</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({}); }} style={{ marginTop: 4 }}>キャンセル</button>}
      </form>
      <h2>作品一覧</h2>
      {loading ? <div>読み込み中...</div> : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {works.map(work => (
            <li key={work.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: "1rem", marginBottom: 12 }}>
              <strong>{work.title}</strong> - {work.description}
              <div style={{ marginTop: 8 }}>
                <button onClick={() => handleEdit(work)} style={{ marginRight: 8 }}>編集</button>
                <button onClick={() => handleDelete(work.id)} style={{ color: "red" }}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
} 