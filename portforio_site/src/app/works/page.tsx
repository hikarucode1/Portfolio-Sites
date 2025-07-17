"use client";
import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import WorkCard from "../../components/WorkCard";
import { Work } from "../../data/works";

export default function WorksPage() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "works"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Work[];
      setWorks(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Works</h1>
      {loading ? <div>読み込み中...</div> : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {works.map(work => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      )}
    </main>
  );
} 