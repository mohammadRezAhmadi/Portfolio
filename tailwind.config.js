/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        f1: '#FBC322', // btn linear1
        f2:'#FA7527', // btn linear 2
        title:'#F9F9F9', // header safe
        tag_skill: '#F3F3F3', // title skill ha
        title_sm: '#FA8126', // ghabl title
        box: '#192831', // box sk ills
        select_page: '#222222', // bg icon page 
        select_box: '#161616', // box meshki kenar right side
        hr: '#363643', // khat bein header content
        desc: '#BDBDBD', // description
        base: '#20202A',
        chart: "#FFCB05",
        outline: "#17242C",
        border: '#6C6C6C',
        form_text: "#858585",
        form_base: "#FA7A26"
      },
    },
  },
  plugins: [],
}


