import { Suspense } from "react";
import { Explore } from "./explore/explore";
import { Hero } from "./hero";
import { Nav } from "./nav";
import type Itechnologies from "./type";

const technologiesPromis = async (): Promise<Itechnologies[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback={<h1>Loading...</h1>
      }>
        <Explore technologiesPromis={technologiesPromis()}></Explore>
      </Suspense>

      <div className="my-200 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut rem
        sint deserunt ullam eum, cumque magnam cum aliquid, soluta consequatur
        eaque dolorum quod exercitationem hic quos quo quia consectetur. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur
        nesciunt tempore officiis eaque cumque doloremque optio. Sapiente
        adipisci commodi explicabo sint, laudantium ullam porro quae modi non
        eligendi neque quod nulla? Ad praesentium vero molestiae. Pariatur neque
        amet molestias corporis. Saepe nemo eius perferendis officia qui quasi
        iusto fugiat sequi debitis? Totam porro molestias nulla vitae molestiae
        dignissimos consequatur! Ipsa voluptatum vitae nihil nesciunt sunt
        explicabo, quae eligendi hic eum nemo molestias cupiditate asperiores.
        Laboriosam doloribus iste perferendis cumque? Ea doloribus dolor quas
        qui reprehenderit excepturi laudantium placeat quo in tempora aut
        tenetur ipsam perferendis nam unde, ipsum dolores assumenda fugiat?
        Velit molestias dignissimos enim tenetur itaque adipisci quod officia
        iure pariatur molestiae esse explicabo cumque, omnis soluta dolore
        tempore at error voluptatem commodi aspernatur. Architecto cupiditate
        sit asperiores placeat, minus quas a, dolore sunt atque tempore illo
        repellat expedita facilis et nobis non voluptate in similique quidem
        molestias id magni ea. Sequi quos voluptatum necessitatibus esse.
        Accusantium quae dolores fugiat porro minus dolorum ipsam sit quia eum,
        rerum sed eius iste, vero at aperiam nulla quam maiores totam placeat
        numquam iure magnam cum doloribus. Doloribus, magni? Minima a debitis,
        quos facere suscipit beatae omnis incidunt possimus quisquam, unde natus
        inventore quasi sequi harum fugit cumque magni veritatis enim vero
        tempore consequuntur non nemo. Nam quasi praesentium laborum numquam
        aliquid! Iusto, cupiditate quia! Aspernatur placeat voluptates aut
        pariatur commodi officia ipsa. Nisi excepturi autem assumenda fugit at
        enim placeat commodi possimus modi unde quos accusantium libero sint, id
        ad aliquam odio ducimus impedit doloribus? A error necessitatibus
        possimus adipisci tempore tempora consequatur, inventore eius incidunt
        ipsam, quo ex minus mollitia cumque accusantium deleniti quas sit
        similique eos? Enim, dolorem atque cupiditate magni architecto facilis
        amet? Consequuntur accusamus hic laudantium, voluptas, eveniet nemo
        minus laboriosam rerum cumque quia, qui quasi totam ab non optio odit!
        Asperiores in maiores neque obcaecati maxime! Eos illum vel, dolor ipsa
        illo harum ad optio itaque aliquid eum sit quaerat architecto sint
        officiis. Perferendis consequatur repudiandae, ipsum obcaecati velit
        asperiores veritatis voluptas maxime quasi vel alias dolores dolor eum,
        dolore nemo totam atque laudantium iste eaque quis numquam libero!
        Tempore dolores atque rem explicabo eum! Iste ab possimus fuga quas
        perspiciatis nesciunt dolore placeat et, esse soluta eaque, doloribus,
        aspernatur rem maxime similique beatae aliquid velit est saepe
        architecto praesentium impedit. Accusamus voluptate tempore maiores,
        adipisci nemo, vero, ratione ullam iusto vitae recusandae architecto
        unde! Laboriosam mollitia voluptates non adipisci, quis doloribus
        delectus maxime corrupti, dolorum consequuntur accusamus vitae nesciunt
        perferendis dolore eos aperiam incidunt voluptatibus. Nulla veniam
        numquam porro, soluta aliquam quasi corporis voluptatum praesentium
        repellendus quidem error non ea obcaecati sed doloribus magni placeat
        totam, alias voluptate dolore incidunt? Fugit praesentium voluptas
        dolorum? Ratione itaque doloribus asperiores totam voluptatibus
        voluptate laudantium ipsum culpa! Ipsa officiis repellendus dolorum
        nihil distinctio laborum! Nulla a odit, cupiditate asperiores officia
        nostrum ipsum qui veritatis dolor voluptate, voluptas dolorem quo
        quibusdam reiciendis blanditiis similique culpa nam quaerat facere
        beatae eligendi recusandae, mollitia assumenda! Doloribus facere
        veritatis molestiae dolore!
      </div>
    </>
  );
}

export default App;
