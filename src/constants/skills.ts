export type Skill =
  | {
      image: string;
      name: string;
    }
  | "more";

const skills: Record<string, Skill[]> = {
  "Frontend librarys and frameworks": [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
      name: "React",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
      name: "React native",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558",
      name: "Vue",
    },
    {
      image:
        "https://i.ytimg.com/an/aAmP-WcI6dg/503422970480686737_mq.jpg?v=60ad54a1",
      name: "Flutter",
    },
    {
      image: "https://www.solidjs.com/img/logo/without-wordmark/logo.png",
      name: "Solid",
    },
  ],
  "Fullstack frameworks": [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
      name: "Next",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1200px-Nuxt_logo.svg.png",
      name: "Nuxt",
    },
  ],
  "Frontend packeges": [
    {
      image:
        "https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg",
      name: "React query",
    },
    {
      image:
        "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      name: "Redux",
    },
    {
      image:
        "https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560",
      name: "Zustand",
    },
    {
      image: "https://mui.com/static/logo.png",
      name: "Material ui",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      name: "Tailwind CSS",
    },
    {
      image:
        "https://seeklogo.com/images/H/headless-ui-logo-034B045C5C-seeklogo.com.png",
      name: "Headless UI",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAC/v7+qqqplZWXv7+/c3Nyvr6/Hx8f6+vqbm5vs7Ow3Nzf39/e4uLhpaWk8PDzk5OQZGRnW1taGhoaRkZFBQUFcXFxxcXEqKioICAhMTEzExMReXl4REREyMjKAgIAiIiJ2dnZRUVErKyuioqKMjIzPz88rH3YJAAAE80lEQVR4nO2d6VbiQBCFmSBbWAOKuAs68v5vODI6ZzgKSXXXjbV03/8p73eSSHd1VaXTIegXSJS/1amKcre+Wd7eLm/Wu7KoSBdx9WOE4+7F7deLlptBzwthcXfuwuvCA2F3WXfpsmudcNB89cAy4WpCuXyyMkt4SQ1waZNwTLqBH5qMDRKuwmK086S2SViEBrk3RjgLjzIzRXgfE6aFu9gaYeA7+E/4d7Etwl5sIPhCtS3CRWygtRHCq/hIVyYI+5xQfQuEa04o8HPaCiFhN1En7E4Dw/eFEBpMI2GXGwy6JUbQHXQcs3ZHT9FSOWHwgvu7kLkbvpsPHYV84Ed7UE04RYSbaiZk/lR8CPiDgbBz0P+IF4hwc82Ej4hwj4oJK0w83JkGxs8RYUTu4pRw+QyMnyNCxr7pWLg9FMbPEeEGE2+jlzAgB1ynhV5CyL9S5NIU4+eIEB4wE2ZCuCF4QHWEoP80uGUbxs8R4RMm3kQv4RwTD7e5wPhJatXmf+Xtf/fkfweM+VejOovhPxPlP5voPyOcQFbf/8lMAqdr/k9IEzjljq+mOchCpUIC1Sb+K4YYFTV3YMBcuRdNGPsqgl/CNgk7w5gwQzhgroLmEIbXQVurZA+uhMa/g60TdnoBi5tFS4167RL67wp614qU5jfc2dUhbRfb7ED8AUL/HZYHFdfnLnxw0SV70HRwotN5NwOmDaUJD6pm5eazGmWyKWc/062elZWVlZWVlVWvab/oPm9etuQ1jSnty/lr8KrNjPZX35MT0p6AKk5Xk0jbQml/thJf2hlEvfLbBs8VYbXj7w81q382C+GDcNzccSdtkaXpcyOfbcLfBD7LhBWxj0naZ7RoN9AuYe/stEMnhCHn1NJeo/QWAGiS8CUE0CBh77WZyjRhcDWMtOFQhQ9bk3YcqIhiH2nLYYqpZpL2HKR9BKApwriSO2nXAYosm5S2Tddo652QvtY2Skgu0rJKGN+yJO2cqHE0oBVCxshKaes0cRrNpb2TxGp0kTZPEqtZSdo8RbyuQWn3BDEblKXtE1R/tOSAkDvsQdp/s5pOz8wTsn4pTBCGJUcNErJvoXpC/rBDaYIGRTd8miEEzHaSRmgQH1A5YVQ/qylCxPRmaYZajQCAugkhE9akIWoFmHqkmxDykKomjDpqMkUYVHJhkhAzcFSaokaY11AzIeY11ExYuifkJmj0E269E0ImVaom5GdotBMCBlUqJ2RPcVRPiFmzaSYEfTRFMWFs/Ywdwhv3hKCPNSgmBAFmQkFlwkyYCeXln3DrnpBdoqCeEPTxIsWElD5t24T+d8D+sxj+M1H+s4moLbA0Ro38Z/X9n8z4P13zf0Lq/5Q7gUoF/9Um/iuGIKWJugn9V+75r770X0GbQBW0/0r2BLoR/HeU+O8KSqCzy393XgIdlv67ZBPodPbfrZ7AxAH6MFazhP4nfyQwvcX/BJ4EpiglMAnL/zSzBCbSJTBVMIHJkP6ne8ZMSbZG6H/KbgKTkhOYdh3zoEo7Dpb7qfPvPxpb74SdUdjqRtpulILWqNJm4xSy05D2GqkxfUssbTVa5Lo+aaPxqoi3UdonR7Rad2mXLLn/sty7es19J9IW2eo3DQSTNghQVf+sStuDyPuXVv9qePaFlHaG06g4XQUn7QuqkfOvVn9qX86ffBMeNK2Gg7fnzcviZilD+Ae0xFu4/OOaoAAAAABJRU5ErkJggg==",
      name: "Radix UI",
    },
    {
      image:
        "https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png",
      name: "Emotion CSS",
    },
    {
      image:
        "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
      name: "Styled components",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
      name: "SCSS",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      name: "Bootstrap",
    },
    "more",
  ],
  Backend: [
    {
      image:
        "https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png",
      name: "Prisma",
    },
    {
      image:
        "https://www.sqlservertutorial.net/wp-content/uploads/sql-server-tutorial.svg",
      name: "SQL Server",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
      name: "Postgresql",
    },
    {
      image:
        "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg",
      name: "MongoDB",
    },
    {
      image:
        "https://www.datarain.com.br/wp-content/uploads/2020/08/DybamoDB-logo.png",
      name: "DynamoDB",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
      name: "SQLite",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADa2tr7+/vx8fH09PTm5ub4+PjFxcXe3t7s7OxVVVXR0dG3t7fu7u6hoaGEhISTk5NJSUmLi4ttbW16eno7Ozs1NTVeXl6rq6t0dHQPDw/Nzc0kJCTDw8OSkpIbGxuioqIrKytmZmZXV1cdHR1MTEy6uro5OTmwsLAWFhZCQkIoKCgsjU8AAAAKsklEQVR4nO1daVvrvA6EpgstXSh0oQvQhVLaw///fZcCjcZJakmOcw7vfTQfwXFsx2ONJdm9ujIYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMFSIVq03eBi9Td430/vH+WD23E/+dZPioVEbzDfXebw+LDv/um0R0O9tPwp6d8bboP2vW1gOz6+e3v3gfaaYr/3l4WW+Hd0dahW0drkej8aDvXxidR747n1jLv6QW3po2AjqxiXUqbUvsidqc2n/Tth2hQ2Z0jOLXnB38uhRvW+iBzojTf+++tgUVdzEZ+7K9MkBTjdJQ5I7bf++2ivi4x4fmZfs2BnY3mdB+eeQ/n1iJancGe7rh5Jd+8ZAV2N/e12It/ndcNZ7fn7uzYZ320lhmbnkM97jE6JBYbDEVvLFiz7g5GXfb2XKtWrrx3zJD4EVqDtP9IM6hWgsoDreVOQYuNjuL3+Ym/yCtOabhGN+/UfTmULgnLjhCtezFv52n/12GTRmfzKPjPk2IW+k1usihpq6mqtMY0XK4ybTx1dmUD7hzG923L3ACXHPFa65LR3JLNwn9kfnwQmrVhIsfqxL31OAOr6a4/SNOz9VktoVeE9sm53BvNW8KYM3xWRwOzhTvqk2xac3bBdnWHyofBlBQ8KuM6r6jV/i6NgJaxid4lJVm4XGErbLj+n6WvE+R4Nf78L2GX20hEwVHSRsqM5w5jkrOR0Nvg164S3UsGTKwoAewzenzkxnmexocIFQyAFJyE07kCaLMr4XZ4lkyeXoJ703BMeTW45BY+zKGCf3rU+s5Ue9teJ1gos+jg/zMIz8UWzlLwCFO6vfHA0+Ur4JBSY3XWAnVN5BhOTg2O+uTYfg9wyYsqBHYuzWYHu5U7VTRUWkwyNTFlbtcG0BSFaaClGDP8lfgvN7xzGYlN2r/A0+4PCyC3NjB6XlbhsNCXuK5ggBVoD3pjkGRupf1JAw2airZ9F6ovfza7OjwWVURDnKLsFUf6Q5egKoFYFLFD0hU0n1DXyAI2FCerSsJUTArp835C3U4AIfiCNH2Y9OnzCe//nKWWw4mlxl9jV7tjiSkLehtP2IGyehtU5iAhwNzs0lVAn8F6eqBUOtAawFkt0tanDGnVRfiIuekM7oRTnBnQcxUcIsJC7DF3TM8EsHESBO/ABAZla0f+/gPPV5lF6E5X5AnI25kH6hRYs0q79PcDT4ZemBllDwVZJ0mY5oC88YC2fdGfhxLu5n+ytBIQBNUn6JVoMMxkb2AFq5S4odyiwkIR2apNJma0CNkVGgAVrvwszG7yxyQKaTVLTcaUEWQLi1dfxYRcsTklBk3Vpp8XKxkQugtUO6KVpDDwp2tfWV99/eJsQ2hl+gARSTAKPP+Y8Ee8IPmdsq9bDJBkQNapFUESaowbNEQzkqdCelLYis2M6gdUFkEU/A7fDR/U5IQqnPKrXJoXERBkt1i66uDtAPx9PfgLCD1O+YeqBKRSglL9CkzYyhi+jpB0s4kdaVLjTlcwWKQayS5WF9A9NYiG5IQrHCTB+qxBqekI67yDfxAwxJbc5URBLK9VfqqdT5mhVIZ9xRkzSD2+EfKoLhUfgiyDtSib0/gVwkqsASarPvEB2QULDpPYNmQ/Sd0xkkKXThENzknsYGSCjS27nX65qtAAlNsUH8AjoqJolDQk1FD9X3kHZnSmcz9mmMJFQFVlINKNy+BYBcE1rVhGlhoORU8pIiRGXydfyg0VfnrhVmgLJBJgcUI9bGXhVI+aR2Nyergh7q1CVFo0ftWkVopj3Ui4pavoPKNK1BvoYKEZDPfcjWoWVTQX7v7+rhVfY0hHYHVDTPq0MQ16duHdrHF8VN+U09dKmoUe//lR7eunX87h6G8HCYqUObFvZ3exiwBV1m69DOg9/+DevHXCU6+Q49HFZm8cH2q3tYcPDxSRempgcr2+KXQaEg0fl1f3cPMYQBfFJtUeixmOccI6EOqWAjzNTQ6Jpf/Q1h7/TRwKQpDRXp22tPVlQPJOHpq0HSlIKKtFaF5JBXClRrX8zDgI2cioOAZ/4OMBb8k18QREXaAUdJm40IIOHxTDugovjwCXkxKnPqhwGTMUnFBFAxSZeaCjJNSgBJCLOrtSn8sxfp3uSjkpYGIgESOm4L1ABCKlKgroqWhgKzad2wJkYzZF7F4YWa/inWhST8BhywkTmlKG5RUZA7AEjCXNYaJveJqEg25vfINiBhQRQNA4uSvWI/3WL+GnOBJCyKomGMX2IV03ldVRxfC7SExceTwGRIUgPSEYueHwxod7s1oQhBaXYhzoFFBFSkIatsqVl+SebdmygEDPL64jnptYqKZEOrUqZp6EHiCEQSXnbrYNSNnXp0r0FFEUSaU4LCGIjxeB0wP5FPWiATWs21a+lXEawKyDCv6xHdqOzcoy1iJRZRFeOGTKiN/7ICPJrB5cmQgqgk/ZIGkF/JMJLGkRaOZrC5J1S0CntBxou9QQLOQPJuI0wL4+Y/aYQKfDXUEDbggG0WXK6AixJz5oJYqziBK4WC5UDCleQqLTQsfiq2dsKCISADzq3UuHaItEGCURt/7TRNo7sySE9w1ha3DEK/n/y+CCgZ+y5KWh2ZpQMvfxCv6Rg99VNxoq9cBtiuMus05gTLrwnFCLiXYbAsxZXflBfIrKRIQkUTnBs1vFSkYu/y6nk0pM3Gi0JUGwBkr9cqwoSOKd3oE/qTRND3otT/uOH3URGTN8vfYHgGmHB/dBJIqN6HI4F9N5ZAJCvsrqYi0C7O/wnxljdlHkImocjzdfDmjVjzdC+sEkkYcBB5DY/79oqo8uLcXA1p2t5PiCTUnDlJgfkavhECX/Iuyj3r8GKvqcJtUNAeHM9C+Q6aoLKP4c+A5dmrBTEQEXi3kZM35RkklEDlry7ey16qvPzhAnCp8rl9UQKV7SIOq0+RohwVH0bLQ3gXg3OlYDkfP6p+r/XBUS1xaMe5i8FDRWc+lzGLWJH3WCOSsJSRctLBPUPl3GR0H3yRi/M6334MP3VJXqATy6etcUyD9xnOPYg+uYYkLBtkxwi/l2IoZMP8/O0/4hrwoEBpleGoN9/xSzf5f6J+sZu07BVhmNUVIefMebNv1cqcbxir2NhzH/aeAkISRjmShOuy1/K4XPycaNL9TOOQORrhnaJ4F9lHFJnYwZRur7XLfIjrxYNkrnbvdpnn/Ms/kjCS/8v5LQDvSej8cao3z6X6Jyzv8r+z4282kjCaq91ZJ70CIik49/e6bhdm6LS6g9t8ae7OebHo0QFNxrv/o+yLjikcH+8O3Xan3kqSpFXvNGu94bz4By64tbEF1W8iXhHnXGrHCM/6ONvoFLvNdDrdZFnnfEBOYlZAwm84qoy7lKB2fx2GHXvdAZIw8t1Uzs3+rJa/Cenjjl83kITR486oGflL76+WF35s5iKmM8Ell5DVVcFFDmtojmQP2BT/YtcnXkVuCCLhNp5vFtCGtV12iuRmnj9eVfT5BrL2dubT00q62IiERBBqDz+veBTr3e7wzdu7p8eDprlJs92Oe41oDq1mu6m83r3THc7fi3p3P55V3dy/iKRzcxgMx6PH29vH0Xi47nXr/0e/YWkwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYPgfPQJ3o/VpL7QAAAAASUVORK5CYII=",
      name: "Express",
    },
    {
      image: "https://miro.medium.com/max/400/1*5QBUnkCjT_m0amIHeweqGg.png",
      name: "Gorilla mux",
    },
  ],
  Languages: [
    {
      name: "Javascript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      name: "Typescript",
      image:
        "data:image/png;base64,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",
    },
    {
      name: "Dart",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    },
    {
      name: "Golang",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
    },
    {
      name: "C#",
      image:
        "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    },
  ],
  Others: [
    {
      name: "Figma",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
      name: "AWS",
    },
    {
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      name: "Git",
    },
    {
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      name: "GitHub",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADHCAMAAAAOPR4GAAAAulBMVEUAiNT+/v7t7e3////s7Oz19fX7+/vx8fHy8vL4+PgAh9UAiNMcicb2//8ThsXs+fkAg9IAf85Dn9YAfs0Agso+m9UAf8rz//8Ahsvk8fe/4PLU6vV4ud6CweHl+v3I5PONx+NlrdqXyObf8Pay3O5UpdUjkM/N7Pan1utYqNY/nNU/mMnK6/ft8/gUis213/Gkz+mWxuZ+uN2y3u6q0uul1ed0tuHX8ve52OtjrtW60NyPutFjp8cAfbsOAdw2AAATYklEQVR4nO1da0PiuhZtG9qEImMrLxERBVH0iDJzvOjcc8///1s3j5amzaNJWx7OzD7nwx4VdlaTrKwm2YkDXGzAI9ZyqQ+pH4Cij6jfpr5PP8D8NvV95reIj6gfUB8WfdelvscCU7+VK4QicCAE9vnA5YWQBPYcVwVf8BP41PfJp1ssGue7XGSXj1wCX18IMbBQCBa4pBB8YPdLwy8GBn/g/4FvDx9Qa1Fzqe9xPqR+QH1E/Tb1fcH3qd+mPqJ+QH3I+R71XRaMDwy0gfWFMAkMucAeH9hhjzyJzx4/i8kefxKTPXIWs+in8Yt+Whb2+Fl89vhZfIPA+kKYB1YUwgUO3+IO3/ryQ56+7ykCi4Uw73vuF4IvFKI+9fyB/3vDPzL18n61gadtUAg+cG7g4cd9j3v8XlD0Xfr4Pfr4XZ/zE7nN+Yj6gcc9fs53vezxZ4HB+VgRGKgC+0LgXCGEwJJC2MiePVDvTvaAm79Gyr4n6HyDvicpxOmqPvDSv/19RS9YDfuj3xE+ddfTXjwFJ6X5TTi/Gc3vjZex0785juZnFEsfiMvzvAnnl1Av9RO6FfyEegnpPUdOdOfLCoG0hTAJLBbC5f30lUfbBUTO17Y+Jf/LZA94vAwdpz+T972WrhAGA0/r1FXf/RCjj57Qbyl617c9jN4ZXsHfEf74KcbgnfDClwf+pTU/nAwigt6JP73qA4+J5lcOPI4bYHMhtYD3yS9cRP029X2F36a+L/oe8RH1A+pDGixgAVzw+MrQhwO+EOxLzQshCQyLgRELzBUiCeCUvHEy6qWtzJJ6gY568f/grR9S9M5wwxUC3q9A0wNP6/SWORAjPVL5D2OuEGh5OQK/vOgd3/WcBH40h1whJn2sf39x+HBywbo9qfzXMTfwwO+RM/wAX0Lz+xU1P5y9RmEKP5pCbuBZP4dOtKw38LRtNH/G+QHvJ3Qr+L7g+9RvCz7ivpT3IXjDSq+TVn7/hgvsfhAh0LtHYiHMA6sKIUGp1vxazjemXiBSr78Z7qq+gysfcIHBNGJkiAOD/Q08aRc4wjLHGpPeru4d8qbLB34NWYcA+2XeY4leuMhIjwK9Blxg8BKzR0Meyi8IH84ecuid+CMH/zr5bbQ9EPx9aH4l9cL7ftjJVf5dbuAZXaas0Hvc38DDa34V5++DetvzjPQSlFeIo2T/fbhTA89rTeDG+F+m+Tm6bYh6mb/expTss/qP6JvubuBBy2j3u3gD7QceZDDwHEnzF0mPVv5LLvBkmP0qfF38MqIXV4JAegTiILe5Bd5GfMu4RvkddV8XvhvAz8uwiN6J73Pw14Pcn/Rn3q+i+YFAeqTyH7p0nj+l4dmQ/20nXCK+EO29aH5EbMfzxG8Lvq/1U4pV+hCtr3sJJh5fPPf5wP600Dt6b22DwPpCIMEPIIUs0/wtOf/z1Kvifx31LpaxUPW48i/HuZeN8UOhgYSD8yYHHhn/H0D1wYlIepTbppCHDz+Hwl98hw1Rz/FELyY9KXrncuHx8NGdODJcTr46fCnp0aq9hjn4i0vJ39yhk9H89tRLvmnak4J3nOHEa3HrvHAj44fhlbdnzU+5lJIhSjif832t7wt+O+/7yTKOrPK3oL0Lhv8YLGWNJHzuto0K0Tb204kkaqnmV3B+Pc2/W8YRrEPnM90snQHcCMRHDSuj2gNPyv+02bcOpvnh1au825NqXRLw3NamTdSR/t3D6IuKXrDpq8A74fCKqwQCf6B4UtHtl4QPwHcV6RH4FygHH3zI275D5r2+oubv3qlIj9jwvbC3cxqp+kl019635kdtar6x7wt+O+f7i2cdekLoucDnRcHLWW8WVCuEzk++yCGc38prfi3nG1GvjvSIET5v8YE/NQ8rvKBjREOan7SBjP/3ovrAe1+LHr/p5nd0SwQv/7DokveXEb3gNibopQNZhoeHLxO83NN6JUveXwQ+6G41lM/gdN18/uZGV/n4cU33B79pzX8jfbnnDQ/lIL+f/0LbVxwqEfej+RMqpWbr+4Lfbj8+RJpmT62/KHzRQjnopw/sKSgpREUEieZPx33G/6zeGf9nfvr4WYtjj7zouwnp6R5A9AN5rZ30JjX0Xd/2scXvnr4Qab1nfsr5mZ+O+8RniBtWfWAel6J3+pOs81EGWKsEb2bhw/jkRS9wr0tIj1b+T1SAPytr+x0y7+WeOHwwwqTXKev4mMa8PHx4XcoW2C5vwD7gN6f5P+QzmgULn4o5XGO9Qkwsut6D5vecpjg/uJIs40gsnrXzXxpckR5TXv3DF3ngWvzf0LjvgpViRrNg4cW6mMf3Uz7RIfmktvFVG/ebUX3g1oD0aB2+w0IW50g9KZK3GH/0NEWvZrYiZ51wsG4Vsjnuy0RianjwO1X4T2YNmG5aKMBfmhAm+/AUnabmv4qN0HfCs3Exh/fGtO07RDA1r/kpDSZsqPDLrDsITSs/yAfw23PTtu+Qea/ArECZlSBrYtyHc8PKd/CLe+HxGwhezoaPJgmENuN+fdXXnpiN+GTrOih0PnBlxpmJhRddr1nVVxu+G2wNeS9kwjUH/4cx8dEYlDpPCj54HHbM4NMNrAX4RoKXe4Kv42bh1+/7xiNXf0IEUq4LvhiqJe4Rokb7viG5q6n13hRBtA2KwXC/MVD7hWdYt8S81R73hR05Sut9FB+/t3i1w44ZgO4CPhnND4vbsZQWPYFi54MlM7xS672A0xG9E/2CRmbh8FGAj5ahY0ibqXWw9D8dza9fnsnBvwAC9U4sBG9m8Yqd03hkzY8je+aqJb4Sc3jLZ3hlFl6OfLIVtJG+n/B3tdme7nNoMlFDyjzoCl9EP13BouuAL0Q1BMlsT51xP/jbbJ7KoXJNePwftoN+asPHxsb9GqrP063K56wTvq6FzgduK7V9J9kYdHTRi8wFezyHQim6xopBsN4b+aYjwzcnbpKaIZTixeJNv/h9ZINAM5qfwkn7PoWc9PeiX1xeQ0+GlR860S1kXdDlltquq7Z9h7Qmru+7bvU1vurro1c9U72O33TFLzq3fNkrfOOikdn+GuO+8bDViba+SL0kac3ydWf3hXSz81E1P1iZd93hRJJJYD7DK//OK09xVPVBRO/IuO3ilzQkRAbnw6p1zywcrI+p+acWlT8TI9s0HrnFm6A5zc/gK/if9PdsXx/t+4bLOsTCJSpSL/6PMEcN7sMfPjvfDUKehP95zk/7flaIBLFjvpOT913TZR2HVL4vbK4MJlYzvFKLpm5WINtdnfU0/1vPuOqwQi1Sr9cynyXRfDHLB6m3p1ff6yUMQFpN12JxggrUYudbVxe8mUVL/yiiF0jzbuQWDoCkFHarGyrrfcKDwyeJJ5eh8RxVfC+Bj7b1275DB79mNL9qL7d0X7eNWqcvJ0JKjdl2nnLDL5I1c3noXvk0e0vwfYkfPFpMU8Rzl6PbgPn+yvh1QW/4TTLP50G5j3i/Qh7fumwHbq58Ixn13jRU++SEm8NqfgTfLWgrvgWyzgceTefHy2z4YdLrGxS95ss6DslDkkcGxktjJRY+uQeF37YRLLhtKiKD27qan1oHjyywPnw9//NpNAubpYnhjZR6aW5OzRfe1Mh+r4L4scnfpwQIubxW2BZ8P/PBT5vK/wnYwQmIO0QhTaIdqxJcLS2e+2iXpQuRxped3mCn+e3kGn7T1VBvQ/QfkuO9D6T51zYLM+Fyret84LER5cs2jRxE9MqT7FVGz17WcA9YNUP/8SM4jOa3EqvhBcI8p6NemykjXaBldfhAhK/U/BbLOg7NvymhXkCJtL787f1tfmZXUfMzNjQ5pRPZrMeH4eA8OyxNdXDaqD79d2iSv/mJbblCWGn+O/MZLieMVwbU62H6b+DlJ/rBn9e9H80fWC3KhQ9rg87Xakj99xd7F712uxGiuW8Evxn1jwXWnuHbDXrkTdwIvnkiiNbiF1ADvp7/qeZfXJpuZCEWTWGJ3E7hu+BnA8Mf3TmlP6dXqvlV5xcX+d+3m57rL0o4Pz2ln9C/eIyjvfVWwIrzLTW/xbJOh77pmt/F6U0aUP/h5Tid87G5l0ff6xMf2L6f4jddi0upvI8+ObS73jMgm52T23maFb1e4JJlHauiALs7ud7MsgC11p8lkPeg+e1WZYYfIH/9dRn8Jug/WiJ7+BLO5+En/L9hJ+yaWYfsXjY8Ip3+DT2euj79x/fCnE/p3RyUAGU3s1A/ObH5xjRbh1nvxc2o1y3wfM7PgnUvIsvdzYKRJZVAGlhZCCPN37Yb9MLntTH17nxv8WCjK2TWoVtHm9f8pecL5K335pl2Pv6szpldE5MYO9yycdG7tHjTo7uXjbmHl5vQOrFHsGiLGodvOehhBgoqwW+BVa9u/Q9nXpVLqHX8b7P3NqQEFBSpVzPk8YEx/dfEHy6R3X18lADTixCpn97GmPhW6zGdThhvAL2Na3cRIvFh5sP0UkRZ4LprH53eCiY3MwbFQkBJIUo1v2ecoprY68LyLk5u4MH0XxM/Ofe7Sc3vG2frMIt+wCrXECeFgLYPW7B4DpoUvZa7cML+oso1xLtCwLq7fsJ0UbkR+FbLOjg4HXpqwPdQ3bWPaAsag+9bzXA57ESqGo2f/Lzu2kf86JUPPDn4u0txiXEX4QLbPUj0Pl2zG3iBKjCwZJuiYc3tmRZCr/mtN1+Sg/WspltkA8/Y6kQH0chJoI1ofts0y/DJ8oVbrrfqTX512Ga6+qLXN83WSS2eNQIfXtVb+4huDSebtPDhZ2yRYUzW2p6DRuB7cFOP/vuGU41a+HanqmAbrmxXmFUvG6je5Fd0ZwdfVgo4t5nhYidScbNNHrfaYPjKk8H3QL1dv70Xs6lGpeZ3LbJ1EsOMq1pidVXUqxx4xhXzm5nhmqip+cHUapKDTbXZLrKJsmdXiEmtLf+x0QqrWvW5N7apVmRBv0H4cFaH/sPXcS344MnyUJXwsus2Cd+z2jxcsE56nWdF+PDKVnnHZLBtEr6HdBcclFlIllqqHltkN+h1kttDba6hL6M+UohaSR/RUzn1KTX/KrYZ8ki0LTQEXqr5ibHJpvWFJf3yFr97pQOPXPZwd4KaGj172XpjnXaO1QVoUYP+w8G4ouqj2ToWz73Dro9qHD70atB/J5rDSvBt9jIklswxNA2/JbmnzdRCsuhTCb71fHNklFRRofY9ZHOaZbFUW1QGX0Z9b9aJVr2XwJjzjagv439UY+l7OEMl1JcCp4+fxSTZOpZ693mdplJ5dJqNAfe8bD9/5mc5HQQ4awNiIajP+N921iGzaOlqA8tkD7JPL47fIdfsa011SrpAjcmv3r2n63sy+PYrDeTs5Wq5REbwUfXJL5bpYwXfJluHGTlAdJ/wa6x9RFNkBb9Cigl9xPuE78FNZfxUjllofvtF1vg7rJxFqtP83N5K9KMq/ZMTbjTTHfQheLvHX2WS8XJEJrjo9yRtwOPaAM89Hvf4OR/wheBXWTIfaC940xk5JVJZiKLsGX8zSS/IMRF90xWTaYxWmcplT7rFpFt14y+50cxU9dll6zCjZy9XzCUyhu+CRRX6J1XZuzeGP+lHoaXF19ns7j7h+1XffsLXriF8+P35IrHnAbbkX8/P5F/czwe7P8M/mBwCPgC+v6qEni76GGp+suuF+T7M/LbgM3om6bAQmnB+Dc3P/NHH5sdT1amP/odS87scGzKfo14XCT5NY3d9wU/2klOfX1sW15lzwVSB08VuALofn7c/B5fDOKou/e+AohA2WZy0eRvfBllT9kC4Xi9e/nN9QYGH9Za8ezTTp3YSq9f01Sgy+KRRjmabH8sHAlx5Q6uNhc9fAj6EaHwz21zjtt4Q8MR65PrLk4XPOGl8Nd820tZFo9d5ms/zmx1TrL8lwEzz44eC0Ojjbf7zYThstMZzRnKrZJpfuamV82lSQ8rzvE/3jaacT3PIOF+xn5Tb4IqQ313MNlvG6/tCzqw/k25qZc1erz5EztdfRFum+amtx1eb7cW3Pm3rjZzhpDWy2dlwpre811e/GwTXOdYw96Stc5284zSRx6+13nu9FOa68AmVjCef87vn1/23ddHCh/Gx4OMaB6NHrGHO+tEeeN3MkkuRyuf5JdMtGv7Xcz6AaDF7n+K23ouPBZwZuRVJ0PwmiWzJ4RUKX3JuBMkVAy7ycVu/3Q5eh0er8ZxFW19IZCt540xWG+T8r9D8HmkPo8fVjtcLtLZ/mpdaSDN9CmmM+l5vew0xeQVezD7naVs/ElKpdehFoPsRvbTGuzez27tDaJiqRq7zbBo+1nhoPZ6tpssz9op2wkZWJBrT/Izz1//9539//fvvv9++nZ2dfaN2Ru0wvtUH/v0HSjR/yeEVKs5nvj8ajbrd0Tkx7HRT/1zwu+b+SPDFACa+EKBweAVr9hL+13K+TPa0Cr4ig5w/NSo9KbzV4rRXq+bAo0pjlB5dcjjR69ab6N7HdMPhX3n+wD8l+OaaX3cFeeXTIusPPPWOKS4/sEjD+YKvOjeo5PAiPrD1wKN68VAEzvlWxxXKm72Ces1Ois11gZa8EHxgVSGqHleo7/XHmOc/IPX8gf8l4RcL0fxBtaDoJ0ucDDL1fcHntrXwewqs8rnkgVt8YLEQbd5vSQshCez9HyttgAwxJwyqAAAAAElFTkSuQmCC",
      name: "Azure",
    },
    {
      name: "Vite",
      image: "https://vitejs.dev/logo-with-shadow.png",
    },
    {
      name: "Vercel",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAAeHh40NDTv7+9AQED09PTR0dH39/eqqqrq6upZWVmfn5/Ly8sLCwu/v79ycnIoKCiZmZnc3NywsLBPT0+Tk5NnZ2eDg4OJiYni4uIiIiISEhJISEheXl5RUVEwMDC5ubl7e3ttbW3q0hscAAAFFUlEQVR4nO3daVIbQQyGYWSMccIOCauBONz/jikSJiF2zze9SC1pSs8JpF+qeqcNBwchhBBCCCGEEEIIIczSg/YA0i7oQnsEYYd0qD2CrFMiOtUeQtKS3i21xxB0+XvDS+0x5NzQHzfag4h5/tjwWXsQKVsabLVHkbG++rvh1Vp7GBHX9M+19jASlvTZHC/G3X8b3mmPw++Y/nesPRC7550NZ3cxvtGub9oj8Vot9jZcrLSHYnW7tyDRrfZQnL4mFiT6qj0Wo5fkhi/aY/E5Sy5IdKY9GJujkQ2PtAfj8mVkQaIv2qPxWI0uSDSPi3EPNrzXHo5D+lIM5nAxXuGGr9rjtbuAC9IMEvjhxIbuE/jpxILuEzi6FAPfF+MyY0PXCfxmej/yncC/Z234XXvMetusBR0n8E+RG3ObwK+nd/vgNIEvpzf7y2cCfyvY8E172Bq7kRvzmMB3IzfmMIHvR27MXQJf70dubOHtYjwULkjk7DkYThdpvoJGOnJjrhL4WOTGPCXwsciNOUrg45Ebc5PA15ULEnm5GD+rN/ypPXqex+oFiR61h89y0rDhifbwOaYiN+Yhgf9o2vCH9vjTpiM3Zj6B50RuzHoCz4ncmPEEnhe5MdsJPC9yY6YT+JZhQdsJ/IllwyftNcal3ufVMPumryRyY1YTeEnkxowm8LLIjdlM4HXpIs1k0CiN3JjFBM66IJH2OvvKIzdmLoG3pIs0a0HjbnrkQsZ+N1QXuTFbCXzqfV4NU2/6aiM3ZiiB10duzE4CRy+5W5h5Bc6RLtKsBI2az6F5jHw0bYvcmI0Envs+r8aV9nLvWiM3ZiCBt0duTD+B138OzaP+0ZQzXaRpBw2OyI0pJ3DJSzHQvRjnHTY811yQK3Jjigm85n1eDb03fe2fQ/OofTSVvxQDrYtR9pK7hdIrcN7Ijekk8I4L6iRw7siNKSRw/siN9U/g/JEb657AJSI31juBS0RurHMCl4ncWNcELhW5sZ4JXCpyYx0TuFzkxvolcLnIjXVL4P0vxaDXxdiobbjps6Bs5Ma6JHC+93k1erzpk47cWIcE3i9dpMkHDfnIjYkn8B6RG5NO4Nr7kXTQ6BO5MdEE3ityY5IJvFfkxgQTuPalGMhdDM6X3C3EXoH3jNyY1O+GtPf6RGbBvpEbE0ngvSM3JpHAe0duTCCB66WLNP6gIfk+rwb7mz6NyI0xJ/BVj4czZc553/TpRG6MNYFrRW6MM4G3/LkSOYwJ3NqlGPBdDJ4fofNj+1m7ZuTGmBK4buTGeBK4buTGWBK4zUsx4LgY/d7n1WB406cfubH2BK73OTRP80dTC5Eba0zgNiI31pbA+f5ciZymP4RiJXJjLQm8//u8Gg1v+uxEbqz6FfjaXrpIO69902cpcmOVF8NW5MbqErityI1VJXCr6SKtJmj4uBSDiothL3JjxQl86eVSDDalCdxi5MYKE7inSzEouxg2IzdW9LfAraeLtJKgYe1zaJ6Cj6Z2IzeWncAtR24sN4FbjtxYZgK3HbmxvARu5X1ejaw3fVvtKZtkvOlbW/0cmudpOmjk/+NJmyb/HaaHyI1NJXBP6SJtImj4iNwYTuCeL8UAXgwvkRsDCXxV+o8nbVqMBw37n0PzjCZw/5diMHYxtH6Ezm8kaPiK3Fj6YviK3FgygXuL3FgigS+tP5wps9kPGv4iN7aXwD1Gbmw3gZ9sFvOycfHvMEMIIYQQQgghhBDCjPwCTb5j6YPLeXUAAAAASUVORK5CYII=",
    },
    {
      name: "Expo",
      image:
        "data:image/png;base64,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",
    },
  ],
};

export default skills;
