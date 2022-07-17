'use strict';

import { createTabContent } from './tabContent.js';
import { tabs, createElement } from './globalStuff.js';

function createAbout() {
    const tabContent = createTabContent(tabs.About.cssClass);
    // tabContent.innerText = tabs.About.buttonLabel;
    tabContent.appendChild(createElement('h2', 'Words about stuff'));
    const words = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolores laudantium distinctio deserunt ut sed vitae iusto natus, aut, excepturi amet optio quas, iure totam temporibus eos nam voluptas sit tempore. Animi minima ab facilis dignissimos dolorem officiis beatae, libero alias velit culpa amet veritatis natus placeat perspiciatis esse, reiciendis distinctio cumque. Ipsam, exercitationem! Iusto non itaque delectus labore iste excepturi praesentium, maiores, ut inventore earum repudiandae aliquam ipsa! Temporibus repellat atque architecto rerum nostrum necessitatibus totam quo voluptas tempore, labore enim dolorum neque, consequuntur quibusdam eos fuga placeat minima ipsa voluptatibus vel! Suscipit animi itaque, accusantium veritatis officiis omnis repellat minus commodi temporibus culpa optio nemo facere beatae, voluptatem perferendis dolorum asperiores pariatur voluptates. Nisi quas porro repellat. Veniam dolorum, corrupti voluptatem ab repellat odit ullam eos aut cumque sequi reprehenderit molestias mollitia obcaecati ea sed necessitatibus amet officia reiciendis facilis ex neque. Vel animi nam, iusto nemo facere adipisci magni est quidem, dolorem facilis quaerat velit pariatur iure porro blanditiis a. Cupiditate deleniti aspernatur, ullam sed mollitia sapiente animi deserunt minima eligendi corrupti soluta alias eaque non quam. Quibusdam, incidunt laborum eaque ad necessitatibus itaque, optio amet tempora similique dolores at voluptatem debitis suscipit nesciunt, adipisci beatae velit.';
    tabContent.appendChild(createElement('p', words));
}


export { createAbout };