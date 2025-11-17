import {
    MultiSelect,
    MultiSelectContent,
    MultiSelectGroup,
    MultiSelectItem,
    MultiSelectTrigger,
    MultiSelectValue,
} from "@/components/ui/multi-select"
import type {CompanyResponseDto} from "@shared/dto/CompanyResponseDto.ts";

const CompanyMultiselect = ({companies,selectedCompanies, handleChange}: {companies: CompanyResponseDto[], selectedCompanies: string[], handleChange: (companies: string[]) => void}) => {
    return(
        <MultiSelect onValuesChange={handleChange} values={selectedCompanies}>
            <MultiSelectTrigger className="w-full max-w-[400px]">
                <MultiSelectValue placeholder="Filter by companies: " />
            </MultiSelectTrigger>
            <MultiSelectContent>
                <MultiSelectGroup>
                    {companies.map(company => (
                        <MultiSelectItem key={company.id} value={company.id}>
                            {company.name}
                        </MultiSelectItem>
                    ))}
                </MultiSelectGroup>
            </MultiSelectContent>
        </MultiSelect>
    )
}

export default CompanyMultiselect;