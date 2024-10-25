const index = (req,res) => {
const berita = [
    {
        judul: "Berita 1",
        isi: "Isi Berita 1",
    },
    {
        judul: "Berita 2",
        isi: "Isi Berita 2",       
    },
    {
    judul: "Berita 3",
    isi: "Isi Berita 3",
    }
];
res.render("index", {title: "Halaman Home", berita, layout: "main"});
};

const about = (req, res) => {
res.render("about", {title: "About", layout: "main"});
};

const contact = (req, res) => {
res.render("contact", {title: "Contact", layout: "main"});
};

const mahasiswa = (req, res) => {
res.render("mahasiswa", {title: "mahasiswa", layout: "main"});
};


module.exports = { index, about, contact, mahasiswa };