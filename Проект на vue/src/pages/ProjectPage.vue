<template>
    <div>
        <main>
            <div class="top-box">
                <div class="top-box__content">
                    <p class="top-box__title">Our Project</p>
                    <p class="top-box__text">Home / Project</p>
                </div>
            </div>
            <div class="content-box center">
                <div class="tags">
                    <fieldset class="tags__fieldset">
                        <div v-for="item in filterTags" :key="item.id">
                            <input v-model="item.checked" class="tags__checkbox" type="checkbox" name="tag" :id="item.name">
                            <label :for="item.name" class="tags__label">{{ item.name }}</label>
                        </div>
                    </fieldset>
                </div>
                <div class="articles">
                    <div v-for="(article, index) in filterArticles" :key="index" class="article">
                        <img class="article__img" :src="article.img" alt="img">
                        <div class="article__bottom">
                            <div class="description">
                                <p class="description__title">{{ article.title }}</p>
                                <p class="description__text">{{ article.section }}</p>
                            </div>
                            <img class="article__button" src="@/assets/img/arrow.svg" alt="arrow">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'ProjectPage',

    data() {
        return {
            filterTag: '',
            filterTags: [
                {
                    name: 'Bathroom',
                    checked: false
                },
                {
                    name: 'Bedroom',
                    checked: false
                },
                {
                    name: 'Kitchan',
                    checked: false
                },
                {
                    name: 'Living Area',
                    checked: false
                }
            ],
            articles: [
                {
                    title: 'Minimal Bedroom',
                    img: 'https://i.ibb.co/RBfkwWw/project-Photo1.png',
                    section: 'Decor / Artchitecture',
                    type: 'Bedroom'
                },
                {
                    title: 'Minimal Bedroom',
                    img: 'https://i.ibb.co/PxGr2nY/project-Photo3.png',
                    section: 'Decor / Artchitecture',
                    type: 'Bedroom'
                },
                {
                    title: 'Classic Minimal Bedroom',
                    img: 'https://i.ibb.co/wBcJtqY/project-Photo5.png',
                    section: 'Decor / Artchitecture',
                    type: 'Bedroom'
                },
                {
                    title: 'Minimal Bedroom',
                    img: 'https://i.ibb.co/Cw9VCRp/project-Photo7.png',
                    section: 'Decor / Artchitecture',
                    type: 'Bedroom'
                },
                {
                    title: 'Minimal Bedroom table',
                    img: 'https://i.ibb.co/5nnkXSw/project-Photo2.png',
                    section: 'Decor / Artchitecture',
                    type: 'Bedroom'
                },
                {
                    title: 'System Table',
                    img: 'https://i.ibb.co/qp6gBhy/project-Photo4.png',
                    section: 'Decor / Artchitecture',
                    type: 'Bedroom'
                },
                {
                    title: 'Modern Medroom',
                    img: 'https://i.ibb.co/Fwmjvct/project-Photo6.png',
                    section: 'Decor / Artchitecture',
                    type: 'Bedroom'
                },
                {
                    title: 'Minimal Bedroom',
                    img: 'https://i.ibb.co/bzW8YkF/project-Photo8.png',
                    section: 'Decor / Artchitecture',
                    type: 'Bedroom'
                }
            ]
        };
    },

    computed: {
        filterArticles() {
            const selectedTags = this.filterTags.filter(tag => tag.checked).map(tag => tag.name);
            if (selectedTags.length === 0) {
                return this.articles;
            } else {
                return this.articles.filter(article => selectedTags.includes(article.type));
            }
        }
    }
};
</script>

<style lang="css" scoped>
.top-box {
    background: url("@/assets/img/mainProjectPhoto.jpg") no-repeat center center;
    height: 356px;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.top-box__content {
    display: flex;
    width: 503px;
    padding: 41px 78px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: #FFF;
}

.top-box__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
}

.top-box__text {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.content-box {
    margin-bottom: 200px;
}

.tags {
    display: flex;
    justify-content: center;
    margin-bottom: 61px;
}

.tags__fieldset {
    width: 880px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 18px;
    border: 1px solid #CDA274;
}

.tags__checkbox {
    position: absolute;
    left: -100000px;
}

.tags__checkbox:checked+.tags__label {
    color: #FFF;
    border-radius: 18px;
    background: #CDA274;
}

.tags__label {
    display: flex;
    padding: 26px 66px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.tags__label:hover {
    color: #FFF;
    border-radius: 18px;
    background: #CDA274;
}

.articles {
    column-count: 2;
    column-gap: 16px;
}

.article {
    margin-bottom: 16px;
    break-inside: avoid;

    width: 585px;
}

.article__img {
    margin-bottom: 15px;
}

.article__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.description {
    display: flex;
    flex-direction: column;

}

.description__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.description__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}
</style>