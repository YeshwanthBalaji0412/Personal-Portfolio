"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { devProfile, aiProfile, uxProfile, ProfileData } from "@/data/profile";

type ProfileType = "dev" | "ai" | "ux";

interface ProfileContextType {
    mode: ProfileType;
    toggleMode: () => void;
    profile: ProfileData;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ProfileType>("dev");

    const toggleMode = () => {
        setMode((prev) => {
            if (prev === "dev") return "ai";
            if (prev === "ai") return "ux";
            return "dev";
        });
    };

    const profile = mode === "dev" ? devProfile : (mode === "ai" ? aiProfile : uxProfile);

    return (
        <ProfileContext.Provider value={{ mode, toggleMode, profile }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
};
