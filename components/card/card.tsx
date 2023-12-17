import * as Styled from "./card.styled";
import web1 from "./assets/web1.webp";
import web2 from "./assets/web2.webp";
import { NavItems } from "./nav-data";

export const Card = ({ ...props }) => {
  return (
    <Styled.Card>
      <Styled.Web1 src={web1} width={164} height={216} alt="Zafar Card Web" />
      <Styled.Header>{props.title}</Styled.Header>
      <Styled.Subheader>{props.subtitle}</Styled.Subheader>
      <Styled.Separator />
      <Styled.Container>
        {
          NavItems.map((item: { path: string; label: string}, index: number) => (
            <span key={`${item.path}-${index}`}>
              <Styled.Lynk href={item.path}>{item.label}</Styled.Lynk>{index >= NavItems.length - 1 ? null : ` |` }
            </span>
          ))
        }
      </Styled.Container>
      <Styled.Footer>zafarsaleem3@gmail.com</Styled.Footer>
      <Styled.Web2 src={web2} width={184} height={178} alt="Zafar Card Web" />
    </Styled.Card>
  )
}
