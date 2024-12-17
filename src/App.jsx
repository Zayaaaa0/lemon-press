import Cards from "./Components/Cards"
import "./App.css"
const news = [
    {
        image: "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
        title: "Зах зээл",
        description: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
        date: "С.Ангирмаа / 12 сарын 17, 2024",
    },
    {
        image: "https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d",
        title: "Эдийн засаг",
        description: "Казакстаны хөгжлийн цаана",
        date: "М.Хулан / 12 сарын 17, 2024",
    },
    {
        image: "https://dash-api.yld.mn/api/image/c00b3bc3-2340-49f4-84d3-a274bd10893f",
        title: "Сурталчилгаа",
        description: "Ариглан гамнаж, ашигтай хадгал",
        date: "Б. Эмүжин / 12 сарын 17, 2024",
    },
    {
        image: "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
        title: "Эдийн засаг",
        description: "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
        date: "М.Хулан / 12 сарын 16, 2024",
    },
    {
        image: "https://dash-api.yld.mn/api/image/497388e5-c62f-4ebd-b64a-f1221f95def7",
        title: "Зах зээл",
        description: "Япон Nasdaq-д хөл тавилаа",
        date: "С.Ангирмаа / 12 сарын 16, 2024",
    },
    {
        image: "https://dash-api.yld.mn/api/image/158e4cc9-11bf-4d8e-9e6b-dd6930ef8992",
        title: "Mining 101",
        description: "Уул уурхайн салбарт карьераа өсгөх боломж",
        date: "С.Ангирмаа / 12 сарын 16, 2024",
    },
    {
        image: "https://dash-api.yld.mn/api/image/e00ad5b2-7618-4c71-9121-e1c12180184a",
        title: "Сурталчилгаа",
        description: "Монгол бартендер дэлхийд өрсөлдлөө",
        date: "Б. Эмүжин / 12 сарын 16, 2024",
    },
    {
        image: "https://dash-api.yld.mn/api/image/b28955f5-0a7c-4c14-829f-8c85e14e18c0",
        title: "Interview",
        description: "Уран AI: Монголын Анхны интерьер болон экстерьер дизайны AI",
        date: "М.Хулан / 12 сарын 13, 2024",
    },
];
const App = () => {
    return (
        <div className="container">
            {news.map((medee) => {
                return (
                <Cards
                img = {medee.image}
                title = {medee.title}
                desc = {medee.description}
                date = {medee.date}
                />
            )
            })}
        </div>
    )
}
export default App;