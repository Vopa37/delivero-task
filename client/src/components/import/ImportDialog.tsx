import React, {useState} from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import ImportPreview from "@/components/import/ImportPreview.tsx"
import {useImport} from "@/hooks/useImport.ts";


export function ImportDialog({open, onOpenChange}:{open: boolean, onOpenChange: (open: boolean) => void}) {

    const [importFile, setImportFile] = useState<File | null>(null);
    const {mutateAsync, isPending} = useImport();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImportFile(e.target.files[0])
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="">
                <DialogHeader>
                    Import invoices from JSON file
                </DialogHeader>
                {
                    importFile ? <ImportPreview file={importFile} setFile={setImportFile}/> : <Input type="file" id="importFile" accept="application/json" onChange={handleFileChange}/>
                }
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button disabled={!importFile || isPending} onClick={()=>{
                        if(importFile) {
                            mutateAsync(importFile).then(() => {
                                onOpenChange(false);
                                setImportFile(null);
                            })
                        }
                    }}>Import</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ImportDialog;
