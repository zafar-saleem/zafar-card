import * as Styled from "./card.styled";
import web1 from "./assets/web1.webp";
import web2 from "./assets/web2.webp";

export const Card = ({ ...props }) => {
  return (
    <Styled.Card>
      <Styled.Web1 src={web1} width={164} height={216} alt="Zafar Card Web" />
      <Styled.Header>{props.title}</Styled.Header>
      <Styled.Subheader>{props.subtitle}</Styled.Subheader>
      <Styled.Separator />
      <Styled.Container>
        <Styled.Lynk href="https://zafarsaleem.medium.com">
          Blog
        </Styled.Lynk> |
        <Styled.Lynk href="https://www.linkedin.com/in/zeesaleem">Linkedin</Styled.Lynk> |
        <Styled.Lynk href="https://github.com/zafar-saleem">Github</Styled.Lynk> |
        <Styled.Lynk href="https://gitlab.com/zsaleem">Gitlab</Styled.Lynk> |
        <Styled.Lynk href="https://www.dropbox.com/scl/fi/u12ek6h98lfng80m9ngr7/CV.pdf?rlkey=tue5iigad6qgyqxk62g759f8i&dl=0">CV</Styled.Lynk> |
        <Styled.Lynk href="https://gist.github.com/zafar-saleem/c194969fc6c6994b3bbf6df8c46aab61" style={{ zIndex: 1}}>Skills</Styled.Lynk>
      </Styled.Container>
      <Styled.Footer>zafarsaleem3@gmail.com</Styled.Footer>
      <Styled.Web2 src={web2} width={184} height={178} alt="Zafar Card Web" />
    </Styled.Card>
  )
}
