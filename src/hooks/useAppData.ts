import { useState, useEffect, useCallback } from 'react';

export const useAppData = (tableName: string) => {
    const [records, setRecords] = useState<any[]>(() => {
        try {
            const saved = localStorage.getItem('app_data_' + tableName);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(records.length);
    const [error, setError] = useState<string | null>(null);

    const refresh = useCallback(async () => {
        try {
            const saved = localStorage.getItem('app_data_' + tableName);
            const data = saved ? JSON.parse(saved) : [];
            setRecords(data);
            setCount(data.length);
        } catch (e: any) {
            setError(e.message);
        }
    }, [tableName]);

    const addRecord = useCallback(async (record: any) => {
        const newRecord = { id: Date.now().toString(), ...record, created_at: new Date().toISOString() };
        setRecords(prev => {
            const next = [newRecord, ...prev];
            localStorage.setItem('app_data_' + tableName, JSON.stringify(next));
            return next;
        });
        return newRecord;
    }, [tableName]);

    const removeRecord = useCallback(async (id: string) => {
        setRecords(prev => {
            const next = prev.filter(r => r.id !== id);
            localStorage.setItem('app_data_' + tableName, JSON.stringify(next));
            return next;
        });
        return true;
    }, [tableName]);

    const updateRecord = useCallback(async (id: string, updates: any) => {
        setRecords(prev => {
            const next = prev.map(r => r.id === id ? { ...r, ...updates } : r);
            localStorage.setItem('app_data_' + tableName, JSON.stringify(next));
            return next;
        });
        return true;
    }, [tableName]);

    return { records, loading, count, error, refresh, addRecord, removeRecord, updateRecord, mode: 'local' };
};
