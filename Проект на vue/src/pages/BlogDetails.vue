<template>
    <div>
        <main>
            <div class="page-photo"></div>
            <div class="content-box center">
                <div class="articles">
                    <div v-for="article in filterArticles" :key="article.id" class="article">
                        <h2 class="article__title">{{ article.title }}</h2>
                        <img class="article__img" :src="article.img" alt="img">
                        <div class="article__img_description">
                            <div class="article__img_description-left">{{ article.date }}</div>
                            <div class="article__img_description-right">{{ article.section }}</div>
                        </div>
                        <p class="article__text">{{ article.text }}</p>
                        <div class="article__quote"><span class="article__quote_quotes">“</span><br>{{ article.quote }}
                        </div>
                    </div>
                </div>
                <div class="tags">
                    <div class="tags__title">Tags</div>
                    <fieldset class="tags__fieldset">
                        <div v-for="item in filterTags" :key="item.id">
                            <input v-model="item.checked" class="tags__checkbox" type="checkbox" name="tag" :id="item.name">
                            <label :for="item.name" class="tags__label">{{ item.name }}</label>
                        </div>
                    </fieldset>
                </div>
            </div>
        </main>
    </div>
</template>
  
<script>
export default {
    name: 'articles-comp',

    data() {
        return {
            filterTag: '',
            filterTags: [
                {
                    name: 'Kitchen',
                    checked: false
                },
                {
                    name: 'Bedroom',
                    checked: false
                }],
            articles: [
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: 'https://i.ibb.co/mzf7wVd/kitchen-Photo1.png',
                    altImg: 'Kitchen',
                    date: '26 December,2022',
                    section: 'Interior / Home / Decore',
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.

                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary.`,
                    quote: `The details are not the details.
                    They make the design.`
                },
                {
                    title: 'Design sprints are great',
                    img: 'https://i.ibb.co/VTmpCrK/kitchen-Photo2.png',
                    altImg: 'Kitchen',
                    date: '29 December,2022',
                    section: 'Interior / Home / Decore',
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
                    quote: ``
                },
                {
                    title: 'Neoclassical-style bedroom',
                    img: 'https://i.ibb.co/KW4qTM4/bedroom-Photo1.webp',
                    altImg: 'Bedroom',
                    date: '30 December,2022',
                    section: 'Interior / Home / Decore',
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.

                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary.`,
                    quote: ``
                },

            ],
        };
    },
    computed: {
        filterArticles() {
            const selectedTags = this.filterTags.filter(tag => tag.checked).map(tag => tag.name);
            if (selectedTags.length === 0) {
                return this.articles;
            } else {
                return this.articles.filter(article => selectedTags.includes(article.altImg));
            }
        }
    }
};
</script>
  
<style scoped>
.content-box {
    display: flex;
    flex-direction: row;
    gap: 57px;
    margin-bottom: 200px;
}

.articles {
    width: 799px;
}

.article__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 11px;
}

.article__img {
    width: 799px;
    height: 539px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #C4C4C4;
    margin-bottom: 46px;
}

.article__img_description {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 48px;
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.article__img_description-right {
    width: 249px;
}

.article__text {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-bottom: 36px;
}

.article__quote {
    display: flex;
    padding: 4px 227px 53px 227px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 27px;
    border-radius: 50px;
    background: #F4F0EC;
    color: #CDA274;
    text-align: center;
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
}

.article__quote_quotes {
    width: 106px;
    height: 97px;
    flex-shrink: 0;
    color: #CDA274;
    text-align: center;
    font-family: "DM Serif Display", serif;
    font-size: 200px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%;
    /* 250px */
    letter-spacing: 4px;
}

.tags {
    width: 345px;
}

.tags__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
}

.tags__fieldset {
    border: none;
    display: flex;
    width: 335px;
    flex-direction: row;
    align-items: flex-start;
    gap: 11px;
    flex-wrap: wrap;
}

.tags__checkbox {
    position: absolute;
    left: -100000px;
}

.tags__checkbox:checked+.tags__label {
    color: #FFF;
    background: #292F36;
}

.tags__label {
    display: flex;
    padding: 9px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
    border-radius: 10px;
    background: #F4F0EC;
}

.tags__label:hover {
    color: #FFF;
    background: #292F36;
}
</style>
  
