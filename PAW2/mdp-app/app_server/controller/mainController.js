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
}

module.exports = {index};