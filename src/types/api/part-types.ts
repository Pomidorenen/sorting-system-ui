
interface IPartType {
    "part_type_id": number,
    "name": string,
    "type_code": string,
    "price": number
}

type PartTypeNew = Omit<IPartType,"part_type_id"|"type_code">

export type {
    IPartType,
    PartTypeNew
}