# Origem destes skills

Copiados de https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (MIT),
versão 2.13.0, commit abb7f2f.

O skill `ui-styling` do pacote original **não** foi incluído: ele trata de
shadcn/ui, Radix e Tailwind e carrega 5,3 MB de fontes para renderização em
canvas — nada disso se aplica a este site, que é HTML e CSS num arquivo só.
As referências a ele em `design/` e `design-system/` são apenas roteamento
("para shadcn, use aquele skill"), não dependência: os demais funcionam sem.

Para atualizar, ou para instalar o pacote completo na sua máquina em vez de
por projeto:

    /plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
    /plugin install ui-ux-pro-max@ui-ux-pro-max-skill
