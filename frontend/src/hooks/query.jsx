import { useMutation, useQuery } from "@tanstack/react-query";

function useGetRequest(url) {
    const { data, status } = useQuery(url, async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    });

    return { data, status };
}

// export function usePostRequest(url, body) {
//     const [mutate, { status }] = useMutation(async () => {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(body),
//         });

//         const data = await response.json();
//         return data;
//     });

//     return { mutate, status };
// }
