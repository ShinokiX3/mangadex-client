import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterTags } from '../../Store/Slices/titlesSlice';
import styles from './titles.module.scss';

import MainContainer from '../../Layouts/MainContainer/MainContainer';
import PageArrowLink from '../../SharedUI/PagesLinks/PageArrowLink';
import FilterTitles from './FilterTitles/FilterTitles';
import SortTitles from './SortTitles/SortTitles';
import { findOutUniqGroups } from '../../Utils/groupElemsBy';

const Titles = memo(() => {
    const [groupedTags, setGroupedTags] = useState([]);

    const params = useParams();
    const titlesId = params['*'];

    const dispatch = useDispatch();
    const filterTags = useSelector(state => state.title.filterTags);

    // TODO: take data from global titles page state to children component

    useEffect(() => {
        dispatch(fetchFilterTags());
    }, []);

    useEffect(() => {
        if (filterTags.data) {
            const uniq = findOutUniqGroups(filterTags.data, 'group');
            setGroupedTags(uniq);
        }
    }, [filterTags.data]);

    return (
        <MainContainer mainClasses={styles.wrapp} containerClasses={styles.container} isHeaderBlack >
            <PageArrowLink title='Advanced search' link='' arrowReDirection />        
            <FilterTitles tags={groupedTags} />
            <SortTitles />
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore alias magnam doloremque quia, quo a dolorum quidem! Voluptatem tenetur aut sed! Dolorem officiis, fuga quod quo quia mollitia inventore saepe eum alias nisi explicabo odio atque esse aspernatur deleniti quam nobis repudiandae nemo autem illo, consequuntur dignissimos eius at. Eligendi dolores sunt voluptatum consequatur molestiae magnam blanditiis aut iusto, ea amet deserunt excepturi fuga explicabo alias sequi autem minima nihil, accusamus doloribus distinctio? Iure velit provident eveniet similique suscipit totam quis quo modi culpa fugit repudiandae cumque dolor optio recusandae excepturi aspernatur itaque qui veniam, alias minus. Quibusdam illo aspernatur commodi voluptatem dignissimos ad, blanditiis itaque iure laboriosam sapiente, facilis qui enim architecto excepturi consequuntur quos nulla tempore hic at quas porro consequatur quod? Placeat labore pariatur harum enim nihil vel, ad dolores voluptatibus eaque sequi exercitationem, illum facere nobis delectus reprehenderit! Laudantium, tempora maiores. Tenetur mollitia ducimus quis, nemo quidem sunt enim quam aperiam praesentium aliquid voluptatem odit, possimus assumenda illo eligendi ullam, quibusdam eos asperiores. Voluptas suscipit recusandae eveniet dolorum quae, consectetur at a eum illo nesciunt dolorem natus debitis quia ea optio molestiae nam ex nostrum tenetur, accusantium ad! Nisi praesentium accusantium perspiciatis voluptas aut dolor impedit excepturi modi quas! Adipisci sint sit modi illo fuga, quae omnis sapiente eligendi, molestiae cupiditate consequatur impedit assumenda suscipit odio, quo ducimus voluptates nam corrupti nesciunt id recusandae quis aspernatur saepe nulla? Eos fugit non pariatur quasi provident? Deserunt officiis quia blanditiis, corporis ratione minus eaque. Harum cupiditate repellat deserunt. Ad rerum minima ipsa, esse, error vitae nisi libero similique consequatur ea expedita? Aut quasi illo necessitatibus rem non nulla commodi, nobis quia soluta sapiente eveniet, ipsum quisquam incidunt suscipit est aliquid ratione dignissimos natus inventore eos? Nulla ipsum sapiente numquam corporis, nemo tempore natus deserunt dicta doloribus ea reiciendis, earum nostrum necessitatibus facere blanditiis quaerat iste architecto eos modi culpa placeat nisi similique quos ut! Quia ut magni quas odit animi odio eos explicabo. Blanditiis repellendus, consequuntur quos veniam libero voluptatibus est excepturi voluptate dignissimos officiis, corporis qui inventore deleniti omnis magni nemo soluta recusandae ab corrupti tempore dolores voluptatum quis sed laudantium. Illum velit deleniti doloribus soluta facilis repudiandae sed nemo corporis blanditiis commodi earum quia inventore, iste et deserunt totam at tempore quos dolorem possimus! Facere minus voluptatem molestias exercitationem, itaque labore assumenda dicta ad officia unde perferendis cum obcaecati, atque quidem molestiae temporibus illo sunt ducimus laborum deserunt ut impedit? Fugit nihil commodi, laboriosam laborum temporibus reprehenderit blanditiis! Quod sunt dolorum, cum eaque accusamus ut consequuntur. Voluptatibus iusto assumenda dolorum enim sit! Eius accusantium est consectetur ex distinctio explicabo, perferendis fuga officiis saepe vel fugit labore placeat. Ducimus cumque cupiditate quia consectetur repudiandae laborum laudantium, veritatis vitae labore autem placeat! Incidunt necessitatibus architecto harum provident non id, illo nostrum neque consequuntur voluptatem omnis alias, sunt vero et recusandae iure optio corrupti obcaecati quod doloremque. Vero delectus nulla voluptas. Libero id aspernatur accusantium esse neque aperiam vero? Assumenda doloremque perferendis ipsam exercitationem similique, possimus, optio ut voluptatem est libero eius commodi cumque rem, maxime numquam incidunt perspiciatis totam illum! Veritatis earum magnam dolorem a! Provident perspiciatis, deleniti iste facere sequi aspernatur veniam culpa laboriosam nam possimus assumenda in adipisci, expedita tenetur quisquam, rerum nulla et sunt ipsam vero illo nihil. Aliquid officia possimus in sed. Placeat eaque pariatur debitis, reiciendis maiores natus ipsa. Unde corrupti nobis, quia nulla rem delectus? Est perferendis recusandae ullam voluptatibus facilis illum accusantium amet laboriosam ducimus ipsa esse, ab, maiores, reprehenderit numquam magnam dolore asperiores necessitatibus nemo fugiat! Fuga sint iusto ipsa nulla nisi, debitis, deserunt odit dicta possimus animi, vel quis amet veritatis corrupti harum laboriosam esse pariatur perspiciatis similique. Laborum excepturi ratione eaque qui dolore neque itaque inventore! Ipsam quasi fugit, beatae, accusantium, et ea at distinctio incidunt perferendis saepe quas natus. Eius veniam repellat eligendi exercitationem reprehenderit accusantium impedit dicta tempora enim similique incidunt, tempore, laborum nam aliquam culpa nisi ullam repudiandae quis placeat totam odio? Aut incidunt asperiores quam molestiae repellat minus unde possimus iste officia sed. Provident minima labore corrupti ratione quaerat, natus alias dolorem fuga dolor, sit neque! Reiciendis illum modi fuga inventore ab error libero laborum officiis repellat cum, quos ea blanditiis molestias distinctio hic officia aspernatur quasi illo itaque necessitatibus voluptas recusandae vero, obcaecati voluptate! Necessitatibus ipsum suscipit ipsam, quia nemo quidem, minus eaque vero ut, nisi dignissimos culpa vitae. Nostrum, provident ipsam soluta molestiae eius doloremque nam illum culpa sequi pariatur dolor rem quod, voluptate, a distinctio ipsum voluptatem ea obcaecati laudantium corporis saepe nesciunt? Quas blanditiis accusantium dignissimos. Aut rerum obcaecati debitis non id? Rem ex inventore at tenetur vel nemo aperiam consequuntur dolor enim nesciunt quo officiis accusamus magni assumenda doloribus minima porro quos architecto, debitis dolore odio eligendi! Minus pariatur libero quidem, molestiae exercitationem, vitae et, distinctio aspernatur ratione tenetur at illo placeat. Ad sit velit aspernatur qui quis, accusamus quisquam excepturi optio dolorem ab illum aliquid culpa earum at. Rerum iure, blanditiis pariatur ratione nulla vero minima ipsa aut tenetur corrupti fugiat ad, tempora illo dolore veritatis consectetur. Eligendi excepturi blanditiis fugiat distinctio voluptates minima expedita illum quasi consectetur doloremque, corrupti ipsa architecto? Delectus ipsam, praesentium unde earum placeat saepe. Voluptatum deleniti minus autem quidem aliquid facilis blanditiis quia repudiandae harum nihil maxime itaque alias nulla praesentium exercitationem est earum obcaecati sit omnis architecto, qui perferendis totam, officiis amet. Dolorem hic ipsum neque minima quidem, quia quasi asperiores. Optio harum quod facere sequi quisquam nisi et deleniti, aliquid consectetur asperiores consequatur nobis delectus doloremque natus aut explicabo minus incidunt, eveniet voluptates voluptas molestiae saepe voluptatum ea porro. Saepe soluta rerum quis quo laborum voluptate animi facere, atque, fugit illum aspernatur. Ipsam aliquam accusamus provident adipisci veniam reprehenderit quasi neque aspernatur illo cupiditate? Deleniti maxime harum similique commodi, ab magni consequuntur nostrum omnis, distinctio minima asperiores hic pariatur excepturi itaque sed quos incidunt quas necessitatibus! Corrupti vero similique officiis, nostrum, quaerat laboriosam numquam soluta doloribus explicabo dignissimos nisi cum, culpa magni ex placeat aspernatur sint autem. Incidunt omnis enim nulla?</div>
        </MainContainer>
    );
});

export default Titles;