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
              <Styled.Lynk href={item.path}>{item.label}</Styled.Lynk> |
            </span>
          ))
        }
        {
          props.searchParams.portfolio
          ?
          <Styled.Lynk href="https://www.dropbox.com/scl/fi/8y5yqq2t9i28ypz4z42n4/portfolio.pdf?rlkey=znin21d5bnqkznrsoggig8gqp&dl=0">Portfolio</Styled.Lynk>
          :
          <Styled.Lynk href="https://www.dropbox.com/scl/fi/9ttf2o90r59p7d2xrer3f/CV.pdf?rlkey=vbdmogb6n6b03nnmce7r5n6lx&dl=0">CV</Styled.Lynk>
        }
      </Styled.Container>
      <Styled.Footer>zafarsaleem3@gmail.com</Styled.Footer>
      <Styled.Web2 src={web2} width={184} height={178} alt="Zafar Card Web" />
    </Styled.Card>
  )
}
