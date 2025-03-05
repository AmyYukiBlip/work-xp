import Listing from "@/components/listing";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function EditListing() {
    const { id } = useLocalSearchParams<Record<string, string>>();

    return <Listing listingId={id} />;
}
