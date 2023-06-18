import "./../styles/ingredientsPage.css";
import logo from "./../img/mujoAbout.svg";
import background from "./../img/background.png";
import { ingredientsPage } from "./../helpers/allData";
import IngredientCard from "../components/ingredientCard/IngredientCard";

const Ingredients = () => {
  return (
    <>
      <main className="main__about">
        <section>
          <div className="about__wrapper">
            <div className="logo__wrapper">
              <img src={logo} alt="mujo logo" />
            </div>
            <div className="logo__text">
              <p className="text__stress">Ingredients</p>
              <p className="text__natural">
                In a world where not all ingredients are made equal, we wanted
                to create a product that's filled only with the highest quality,
                most potent adaptogens we could find around the world.
              </p>
            </div>
          </div>
          <div className="background__wrapper">
            <img className="background" src={background} alt="background" />
          </div>
        </section>

        <section className="all-ingredients">
          <div className="all-ingredients__container">
            {ingredientsPage.map((ingredient) => {
              return (
                <IngredientCard
                  key={ingredient.id}
                  title={ingredient.title}
                  about={ingredient.about}
                  why={ingredient.why}
                  origin={ingredient.origin}
                  science={ingredient.science}
                  img={ingredient.img}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Ingredients;
