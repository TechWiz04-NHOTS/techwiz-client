import ContentStore from "../../components/ContentStore/ContentStore";
import FooterStore from "../../components/FooterStore/FooterStore";
import HeaderStore from "../../components/HeaderStore/HeaderStore";

export default function Store(){
    return(
        <>
            <HeaderStore />
            <ContentStore />
            <FooterStore />
        </>
    )
}