import { create } from "zustand";

interface Profile {
  id: number;
  profileImage: File | null;
  name: string;
  message?: string;
  time?: string;
}

interface ProfileStore {
  profiles: Profile[];
  selectedProfileId: number | null;
  selectedFormId: number | null;

  addProfile: (id: number, profileImage: File | null, name: string) => void;
  updateProfile: (id: number, profileImage: File | null, name: string) => void;
  updateUserMessage: (
    id: number,
    profileImage: File | null,
    name: string,
    message: string,
    time: string
  ) => void;
  removeProfile: (id: number) => void;
  setSelectProfileId: (id: number) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profiles: [],
  selectedProfileId: null,
  selectedFormId: null,

  addProfile: (id, profileImage, name) =>
    set((state) => ({
      profiles: [...state.profiles, { id, profileImage, name }],
    })),

  updateUserMessage: (
    id: number,
    profileImage: File | null,
    name: string,
    message: string,
    time: string
  ) => {
    set((state) => ({
      profiles: state.profiles.map((profile) =>
        profile.id === id
          ? { ...profile, profileImage, name, message, time }
          : profile
      ),
    }));
  },

  updateProfile: (id, profileImage, name) =>
    set((state) => ({
      profiles: state.profiles.map((profile) =>
        profile.id === id ? { ...profile, profileImage, name } : profile
      ),
    })),

  removeProfile: (id) =>
    set((state) => ({
      profiles: state.profiles.filter((profile) => profile.id !== id),
    })),

  setSelectProfileId: (id: number) =>
    set(() => ({
      selectedProfileId: id,
    })),

  setSelectedFormId: (id: number) =>
    set(() => ({
      selectedFormId: id,
    })),
}));
