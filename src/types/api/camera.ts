
interface ICamera{
    "camera_id": number;
    "name": string;
    "resolution_height": number;
    "resolution_width": number;
    "frame_rate": number;
    "is_active": boolean;
    "created_at": string;
}

type CameraNew = Pick<ICamera,"name"|"resolution_height"|"resolution_width"|"frame_rate">;

export type{
    ICamera,
    CameraNew
}