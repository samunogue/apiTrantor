class PagesController{
        static Index = (req, res) =>{
                res.status(200).sendFile(`${process.env.PWD}/src/pages/index/index.html`)
        }
        static Login = (req, res) =>{
                res.status(200).sendFile(`${process.env.PWD}/src/pages/login/login.html`)
        }
        static Cadastar = (req, res) =>{
                res.status(200).sendFile(`${process.env.PWD}/src/pages/cadastrar/cadastrar.html`)
        }
        static EsqueceuSenha = (req, res) =>{
                res.status(200).sendFile(`${process.env.PWD}/src/pages/esqueceuSenha/esqueceuSenha.html`)
        }
        static Dashboard = (req, res) =>{
                res.status(200).sendFile(`${process.env.PWD}/src/pages/dashboard/dashboard.html`)
        }
}
export default PagesController