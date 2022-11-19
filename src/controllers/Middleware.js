import jsonwebtoken from "jsonwebtoken";

export function verificarToken(req, res, next){
    const token = req.headers.token;
    if (!token) return res.status(401).json({ auth: false, message: 'Sem token de acesso' });
    
    jsonwebtoken.verify(token, process.env.CHAVE, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Falha na autenticação do token.' });

      next();
    });
}