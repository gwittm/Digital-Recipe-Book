import useSWR from "swr";
import { useRouter } from "next/router.js";
import Link from "next/link";


export default function DetailsPage() {

    const router = useRouter();
    const { isReady } = router;
    const { id } = router.query;
    const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);
    
  
    if (!isReady || isLoading || error) return <h2>Loading...</h2>;

   
    return (
      
      <>
        <h1>DetailPage</h1>
      <div>
        <div>
          <Link href={"/"} passHref legacyBehavior>
            <Link $justifySelf="start">back</Link>
          </Link>
         
        </div>
        <div>
          <div>
            <div>
              <image
                src={recipe.image}
                priority
                fill
                sizes="(max-width: 700px) 50vw,
              (max-width: 700px) 50vw,
              30vw"
                alt="...here should be a Picture..."
              />
            </div>
            <div>
              <h2>{recipe.title}</h2>
            </div>
          </div>
          <div>
            <ul>
              <li>servings: {recipe.servings}</li>
              <li>time: {recipe.time}</li>
              <li>course: {recipe.course}</li>
              <li>preparation: {recipe.preparation}</li>
            </ul>
          </div>
          <div>
            <h2>Ingredients:</h2>
            {/* <ul>
            {recipe.ingredients.map((ingredient, index) => (
                <div key={index}>
                  {ingredient.name} {ingredient.amount} {ingredient.unit}
                </div>
              ))}
            </ul> */}
          </div>
          <div>instruction: {recipe.instruction}</div>
        </div>
        
      </div>
    </>
  );
}



