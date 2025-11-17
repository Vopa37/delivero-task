import {useMutation, useQueryClient} from "@tanstack/react-query";
import {api} from "@/hooks/api.ts";
import type {ImportOutputDto} from "@shared/dto/ImportOutputDto";

export function useImport(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (file: File) => {
            const formData = new FormData();
            formData.append("file", file);

            const res = await api<ImportOutputDto>('/import',{
                method: 'POST',
                body: formData,
            });

            if (!res.success) {
                throw new Error(`Import failed`);
            }

            return true;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['shipments']
            });
        },
    });
}