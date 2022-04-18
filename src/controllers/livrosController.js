import livros from "../models/Livro.js"

class LivroController{
    static listarLivros = (req,res) =>{
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static cadastrarLivro = (req, res) =>{
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro`});
            }
        })
    }

    static atualizarLivro = (req,res) => { 
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}), (err) =>{
            if(!err) {
                res.status(200).send({message: 'livro atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message});
            }
        }
    }
    
    static listarLivrosPorId = (req,res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não atualizado.`})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Livro excluido com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarLivroPorEditora = (req,res) => {
        const editora = req.query.editora

        livros.find({'edidora': editora},{}, (err,livros) => {
            res.status(200)
        })
    }
}

export default LivroController