import { useState, useEffect } from 'react';

export const useGeneratedAuth = (authProvider?: any) => {
    const [user, setUser] = useState<any>(() => {
        try {
            const saved = localStorage.getItem('webgeny_auth_user') || localStorage.getItem('user');
            if (saved) return JSON.parse(saved);
        } catch {}
        return null;
    });
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState<any>(user);

    useEffect(() => {
        const checkLocalUser = () => {
            try {
                const saved = localStorage.getItem('webgeny_auth_user') || localStorage.getItem('user');
                if (saved) {
                    const parsed = JSON.parse(saved);
                    setUser(parsed);
                    setProfile(parsed);
                } else {
                    setUser(null);
                    setProfile(null);
                }
            } catch {}
        };
        window.addEventListener('webgeny_auth_change', checkLocalUser);
        window.addEventListener('storage', checkLocalUser);
        return () => {
            window.removeEventListener('webgeny_auth_change', checkLocalUser);
            window.removeEventListener('storage', checkLocalUser);
        };
    }, []);

    const signOut = async () => {
        localStorage.removeItem('webgeny_auth_user');
        localStorage.removeItem('user');
        setUser(null);
        setProfile(null);
        window.dispatchEvent(new Event('webgeny_auth_change'));
    };

    return { user, profile, loading, signOut };
};
