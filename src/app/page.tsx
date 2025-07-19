// import {HeadedButton} from "@/components/Button/primary-button";
import {HeadedButton} from "@/index";
import {VariantEnum} from "@/components/variants";

export default function Home() {
    return (
        <div>
            <HeadedButton variant={VariantEnum.Primary}>
                Primary
            </HeadedButton>
            <HeadedButton variant={VariantEnum.Secondary}>
                Secondary
            </HeadedButton>
            <HeadedButton variant={VariantEnum.Tertiary}>
                Tertiary
            </HeadedButton>
            <HeadedButton variant={VariantEnum.Outline}>
                Outline
            </HeadedButton>
        </div>
    );
}
