import { useState, useEffect } from "react";
import Template from "../components/Template"
import api from "../api"

function Home() {
    const [Templates, setTemplates] = useState([]);
    const[content, setcontent] = useState("");
    const[nomTemplate, setnomTemplate] = useState("")

    useEffect(() => {
        getTemplates();
    }, [])

    const getTemplates = () => {
        api
        .get("/api/templates/")
        .then((res) => res.data)
        .then((data) => {
            setTemplates(data)
            console.log(data)
        })
        .catch((err) => alert(err));
    };

    const deleteTemplate = (id) => {
        api.delete(`/api/templates/delete/${id}/`).then((res) => {
            if (res.status === 204) alert("Template supprimer")
            else alert("Erreur lors de la suppression du template.")
            getTemplates()
        }).catch((error) => alert(error))
    }

    const createTemplate = (e) => {
        e.preventDefault()
        api.post("api/templates/",{content, nomTemplate}).then((res) => {
            if(res.status === 201) alert ("Template cree ! Felicitation")
            else alert("erreur lors de la creation du temlate.")
            getTemplates();
        }).catch((err) => alert(err))
    }

    return <div>
        <div>
            <h2>Templates</h2>
            {Templates.map((template) => <Template template={template} onDelete={deleteTemplate} key={template.id}/>)}
        </div>
        <h2>Creation d'un template</h2>
        <form onSubmit={createTemplate}>
            <label htmlFor="nomTemplate">nom Template :</label>
            <br />
            <input
                type="text"
                id="nomTemplate"
                name="nomTemplate"
                required
                onChange={(e) => setnomTemplate(e.target.value)}
                value={nomTemplate}
            />
            <br />
            <label htmlFor="content">content :</label>
            <br />
            <textarea
                id="content"
                name="content"
                required
                onChange={(e) => setcontent(e.target.value)}
                value={content}
            ></textarea>
            <br />
            <input type="submit" value="submit"></input>
        </form>
    </div>
}

export default Home