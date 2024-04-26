import MyCalendar from "../../components/Calendar";
import { useMenuContext } from "../../context/MenuContext";

const CompanyAgendaPage: React.FC = () => {
  const { isNavOpen } = useMenuContext();
  return (
    <section
      className={`flex flex-col justify-center items-center  ${
        isNavOpen ? "pl-52 ml-1.5" : ""
      }`}
    >
      <div className="mt-5 flex justify-center">
        <div
          id="calendar"
          className="my-10 mx-10 shadow-shadowBox rounded-3xl p-8 "
        >
          <MyCalendar />
        </div>
      </div>
    </section>
  );
};

export default CompanyAgendaPage;

/*

<div className="w-fit bg-purple_light py-2 text-white flex gap-5 px-5 rounded-3xl">
            <div>
              {" "}
              <h5 className="border-r-2  pr-4 text-base max-w-72">
                <span className="font-bold">Próximo serviço:</span> Corte
                Degrade + Barba
              </h5>
            </div>

            <div className="font-bold flex flex-col justify-center">
              <p className="text-xl">Dia 21</p>
              <span className="text-base">08:00 AM</span>
            </div>
          </div>

            <div className="w-full flex justify-end">
          <div className="w-fit bg-purple_light py-2 text-white flex gap-5 px-5 rounded-3xl">
            <div>
              {" "}
              <h5 className="border-r-2  pr-4 text-base max-w-72">
                <span className="font-bold">Próximo serviço:</span> Corte Degrade
                em Carlos
              </h5>
            </div>

            <div className="font-bold flex flex-col justify-center">
              <p className="text-xl">Dia 25</p>
              <span className="text-base">13:30 PM</span>
            </div>
          </div>
        </div>

*/
