import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Index() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleInputFields = watch();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users/${handleInputFields.username}`);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}>
      <h2 className="mb-1">Github Profile</h2>
      <h6 className="text-muted">Generate your Github Profile</h6>
      <form
        onSubmit={handleSubmit(searchUser)}
        className="d-flex gap-2 mt-3">
        <div className="d-flex flex-column">
          <input
            type="text"
            className="search_input rounded-1 shadow-none p-2"
            placeholder="Github Username"
            {...register("username", { required: true })}
          />
          {errors.username && <span className="text-danger small">This field is required</span>}
        </div>
        {/* <Link href={"/main"}> */}
        <div>
          <button
            type="submit"
            className="custom_button rounded-1 px-5 py-2 ">
            Generate
          </button>
        </div>
        {/* </Link> */}
      </form>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor beatae dolorem velit numquam, soluta, assumenda sed doloremque fugiat quis dolorum rerum deserunt et, ipsum consequatur nesciunt a nihil sequi magnam delectus ratione. Veniam exercitationem incidunt magnam consectetur? Blanditiis nobis sit non voluptatum, fuga aliquid facilis autem, praesentium, repellat provident qui deleniti? Velit perferendis labore, quasi unde asperiores accusamus amet reprehenderit eum officia quisquam. Voluptatum, necessitatibus. Sequi incidunt laudantium quasi repudiandae ex inventore dicta, dolores ut vel tenetur qui vero omnis iste. Earum veritatis non eligendi quod modi consequuntur molestias culpa error voluptatibus laboriosam velit reprehenderit commodi harum asperiores praesentium necessitatibus explicabo cum, dolorum autem. Corporis, tempore! In praesentium sequi tempora repellendus necessitatibus ratione ipsum harum natus veritatis odit, temporibus est autem iusto maxime, delectus dolores quia officiis numquam blanditiis eligendi distinctio? Voluptate sit repellendus aliquid corporis illo ex? Dolorem quae soluta modi excepturi neque odit consequatur, labore delectus deleniti ipsum nobis rerum voluptatum molestiae, inventore aliquam ea veritatis corrupti quas, ab odio repellendus eligendi voluptatibus! Possimus ut dignissimos deserunt maiores in soluta rem a nesciunt asperiores, et hic animi, modi totam voluptatum? Iure et debitis maxime laudantium aut dicta molestiae perferendis possimus repellendus blanditiis ab vitae voluptas minima, nam earum suscipit, ipsa eos natus cupiditate. Accusamus modi itaque omnis voluptatem hic? Voluptates nam, sint eveniet quas ipsum exercitationem ex veritatis! Quod iure ad quasi excepturi officia praesentium maxime tempora, consectetur nulla aspernatur delectus officiis quia repudiandae ipsam debitis, explicabo impedit saepe tempore doloribus eaque est. Tempore quisquam, accusantium libero sequi consectetur praesentium magni, voluptatum totam eius, distinctio veniam unde voluptates voluptate eos vero inventore cumque voluptatem dolore deleniti consequatur laboriosam. Consequuntur illo voluptates excepturi quidem, distinctio, iusto explicabo consectetur cupiditate nihil debitis possimus et pariatur culpa aliquid facere recusandae. Delectus, est nesciunt. Ratione voluptas nemo velit aperiam. Modi excepturi est consequatur eaque. Quia, adipisci. Mollitia blanditiis obcaecati fugiat ducimus dolorem, harum veniam. Repudiandae mollitia unde adipisci distinctio praesentium deleniti maiores delectus ea earum cum, dicta, iure laboriosam exercitationem omnis ad doloribus asperiores sed totam quam assumenda porro dolorum nemo! Perferendis suscipit sequi harum officiis a odit fugit, omnis dolores perspiciatis, asperiores, porro illum iure? Ipsa dolore quae laboriosam beatae accusantium voluptatibus dicta repellat omnis nihil corrupti! Ut perferendis placeat quibusdam saepe provident repellat error nam, eaque laboriosam repellendus rem, asperiores vitae atque recusandae, nulla suscipit quas modi consectetur soluta incidunt esse corrupti quos. Ex quos perspiciatis cum mollitia recusandae quasi, explicabo voluptas aspernatur, facere odio placeat ut ipsum illo, sint facilis voluptate. Quisquam, cupiditate dicta. Repellat voluptate fuga laudantium laborum maiores distinctio autem soluta numquam dolorem, labore nemo quam at sunt possimus tenetur totam culpa natus deserunt, a ad dolor sit incidunt. Accusantium, nihil similique? Nemo veniam, obcaecati facilis earum eos nesciunt explicabo vitae eum omnis. Animi maiores fuga laboriosam culpa ipsum, beatae at vero tenetur earum, explicabo, voluptate aspernatur ex provident odit! Neque deserunt, est ut, quo facere exercitationem quos blanditiis consequatur unde eius ipsam ab eum doloremque mollitia at porro labore maxime asperiores adipisci corporis molestiae, magni consequuntur minus! Rem numquam voluptas illum atque laudantium sint aperiam tenetur similique accusantium aliquam et laboriosam blanditiis temporibus deserunt possimus repellat ad enim quaerat libero ipsum, iure dolorem? Reiciendis, ullam illum totam qui corrupti rerum numquam ex? Quia aliquam incidunt dolore optio nam dolores quisquam sapiente accusantium cum ut eius perspiciatis aspernatur accusamus, ducimus, deserunt commodi earum? Neque, reiciendis. Totam repudiandae neque voluptates explicabo tenetur omnis voluptas, quidem deleniti suscipit aliquid? Iure expedita unde error! Modi facilis tempore natus voluptates, minus totam, voluptatem architecto placeat aspernatur id fugiat nisi ullam cum, enim reprehenderit unde repellendus obcaecati pariatur sint maiores quam vel. Ipsam voluptas nobis, itaque incidunt dolorum vitae mollitia aliquam ex. Animi quaerat impedit tempore maiores omnis neque quis, repellendus est natus facere excepturi sed quae saepe consequatur pariatur iste ea eligendi perferendis deserunt optio fugiat. Magnam ratione sed, possimus voluptas, mollitia labore quidem at quo hic expedita unde maxime ipsam molestias dolorum distinctio nesciunt praesentium corrupti id iste ex cumque quis blanditiis. Iusto ullam illum quaerat vero obcaecati nulla odit est atque eligendi. At dicta molestiae possimus iure saepe recusandae necessitatibus, minus nemo, omnis aperiam laudantium vero repudiandae esse dolorum laborum. Eius, natus! Itaque accusamus cum similique iusto illo dignissimos fuga eligendi omnis quidem. Earum qui molestias enim in itaque aperiam, ullam eligendi, maiores, excepturi temporibus quod similique quae repellat quisquam? Non porro, odit in vitae, vero velit fugiat similique accusantium optio facilis, ut blanditiis eveniet autem illo et tenetur cumque enim alias deserunt dignissimos numquam perferendis? Tempore eos, explicabo itaque aspernatur sint, atque fugiat labore facere pariatur mollitia hic. Eveniet ipsam soluta eius praesentium necessitatibus quod et illum incidunt adipisci illo consequuntur, placeat reprehenderit quo harum fugit distinctio, aspernatur voluptas quae iusto, odit repellat quos sapiente aperiam. Hic eum quo similique quisquam ut qui omnis illo debitis quidem rem perferendis recusandae cum possimus labore, eos perspiciatis veritatis ab a libero facere modi consequatur reprehenderit. Ut explicabo quidem neque ex itaque esse omnis aut eligendi culpa, accusamus voluptatem nesciunt dolorum at temporibus, illum voluptates dicta repudiandae exercitationem ea! Maiores, doloribus necessitatibus ad adipisci hic, consequatur dolor blanditiis iste facilis ducimus cupiditate voluptatibus asperiores? Dolore commodi saepe fuga magnam, quas itaque error molestias expedita quod, consectetur natus id amet, distinctio maxime quo necessitatibus praesentium officiis reprehenderit totam. Facilis autem labore ipsam hic nobis temporibus modi sunt consequatur eius quae, assumenda quod itaque. Animi dolores corrupti cumque? Nihil quas perferendis sed molestias fugiat aliquid quisquam fugit maxime excepturi neque magnam consectetur quis velit facere aperiam reprehenderit, iure exercitationem sequi. Placeat sunt ipsam quos necessitatibus voluptates. Nulla culpa obcaecati consequuntur quam optio adipisci soluta maiores aliquid, molestiae repudiandae omnis quo laborum in modi ex voluptatem officiis facilis, reprehenderit dignissimos dolore cum cupiditate? Sunt quae dolore voluptate laudantium hic. Pariatur rem sed, expedita eligendi quasi recusandae, voluptatem repellendus, reprehenderit vel modi eum! Iste dignissimos vitae quaerat ratione error unde ipsum, rerum soluta doloremque recusandae, ex dolor quisquam. Vel ab at repellendus odio maxime asperiores eaque, natus quisquam ut cumque. Nemo dolore eos temporibus vitae.</p>
    </div>
  );
}

export default Index;
