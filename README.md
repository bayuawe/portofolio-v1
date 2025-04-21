
# Portofolio v1

Portofolio v1 adalah website portofolio pribadi yang dibangun menggunakan Next.js dan Tailwind CSS. Dirancang dengan layout dua kolom yang minimalis dan responsif, cocok untuk menampilkan informasi pribadi, pengalaman kerja, proyek, dan keterampilan secara profesional.

🔗 **Demo Live**: [https://bayuawe.my.id](https://bayuawe.my.id)

## ✨ Fitur

- 💡 Tata letak dua kolom yang responsif
- ⚙️ Konten mudah dikustomisasi melalui file JSON
- 🎨 Kustomisasi warna menggunakan Tailwind CSS
- 🚀 Performa tinggi dengan Next.js

## 🔧 Teknologi

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## 🚀 Cara Menjalankan Proyek

1. **Clone repositori**

   ```bash
   git clone https://github.com/bayuawe/portofolio-v1.git
   cd portofolio-v1

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   
3. Jalankan project

   ```bash
   npm run dev
   # atau
   yarn dev

## Customization

In order to customize the template to your own needs, please do the following.

1. Edit the title and description of the website in the file `app/layout.js`.
2. Add your personal details by editing the file `translations/en.json`
   - You can specify an arbitrary number of positions in experiences (+ their skills), education, voluntering and projects.
   - In the About section, multiple paragraphs can be created by creating multiple entries in the array `General:about`.
3. Replace the file `app/favicon.ico` with a favicon of your choice.
4. (Optional) Change the color palette by editing the file `tailwind.config.js`.
5. (Optional) Edit the imprint and privacy statement if it is necessary in your country.
6. Enjoy!

## Credits

This software uses the following open source packages:

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Heroicons](https://heroicons.com)

## License

GNU GENERAL PUBLIC LICENSE 3.0
