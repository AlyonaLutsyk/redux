import { useDispatch, useSelector } from "react-redux";
import { changeLang, selectLang } from "../redux/localeSlice";

export default function LangSwitcher() {
    const dispatch = useDispatch();
    const lang = useSelector(selectLang);

    const handleChange = (event) => {
        // event.target.value
        dispatch(changeLang(event.target.value))
    }
    return (
        <div>
            <select value={lang} onChange={handleChange}>
                <option value="en">EN</option>
                <option value="uk">UK</option>
                <option value="pl">PL</option>
            </select>
        </div>
    )
}