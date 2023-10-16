export type State = {
    name: string;
    avatarUrl: string;
};

export type Action = {
    updateName: (name: State['name']) => void;
    updateAvatarUrl: (avatarUrl: State['avatarUrl']) => void;
};