import axios from "axios";

function request(param: string, setArrayProd: Function, setArraySuggestion: Function) {
    if (param) {
        return axios({
            method: "get",
            url: `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${param}&source=nanook`,
            responseType: "stream",
        })
            .then((response: any) => {
                if (response.data.products.length === 0) {
                    return ([
                        "Desculpe não foi possivel localizar o produto, tente novamente mais tarde.",
                        "warning",
                        "Produto não encontrado!",
                    ]);
                } else {
                    setArrayProd(response.data.products)
                    setArraySuggestion(response.data.suggestions)
                }
            })
            .catch((error) => {
                return ([error, "warning", "Erro na pesquisa"]);
            });
    }
}

export { request };