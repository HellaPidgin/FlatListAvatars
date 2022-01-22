import { ImageSourcePropType } from "react-native";

export interface ContactDataType {
    id: number,
    description: string,
    job: string,
    first_name: string,
    last_name: string,
    image: ImageSourcePropType
}