<template>
    <div>
        <main>
            <div class="top-box center">
                <!-- <img src="./img/Banner.png" alt="banner" class="top-box__background"> -->
                <div class="top-box__content">
                    <div class="top-box__title">Let Your Home Be Unique</div>
                    <div class="top-box__text">There are many variations of the passages of
                        lorem Ipsum fromavailable, majority.</div>
                    <button class="top-box__button">Get Started
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                                stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="average-box center">
                <div class="average-box__title">Follow Our Projects</div>
                <div class="average-box__text">It is a long established fact that a reader will be distracted by the of
                    readable content of page lookings at its layouts points.</div>
                <div class="projects center">
                    <div class="item">
                        <img class="item__top" src="@/assets/img/mainImage1.png" alt="image">
                        <div class="item__bottom">
                            <div class="description">
                                <p class="description__title">Modern Kitchan</p>
                                <p class="description__text">Decor / Artchitecture</p>
                            </div>
                            <img class="item__button" src="@/assets/img/arrow.svg" alt="arrow">
                        </div>
                    </div>
                    <div class="item">
                        <img class="item__top" src="@/assets/img/mainImage2.png" alt="image">
                        <div class="item__bottom">
                            <div class="description">
                                <p class="description__title">Modern Kitchan</p>
                                <p class="description__text">Decor / Artchitecture</p>
                            </div>
                            <img class="item__button" src="@/assets/img/arrow.svg" alt="arrow">
                        </div>
                    </div>
                    <div class="item">
                        <img class="item__top" src="@/assets/img/mainImage3.png" alt="image">
                        <div class="item__bottom">
                            <div class="description">
                                <p class="description__title">Modern Kitchan</p>
                                <p class="description__text">Decor / Artchitecture</p>
                            </div>
                            <img class="item__button" src="@/assets/img/arrow.svg" alt="arrow">
                        </div>
                    </div>
                    <div class="item">
                        <img class="item__top" src="@/assets/img/mainImage4.png" alt="image">
                        <div class="item__bottom">
                            <div class="description">
                                <p class="description__title">Modern Kitchan</p>
                                <p class="description__text">Decor / Artchitecture</p>
                            </div>
                            <img class="item__button" src="@/assets/img/arrow.svg" alt="arrow">
                        </div>
                    </div>
                </div>
            </div>
            <div class="data-box center">
                <div class="data">
                    <div class="data__number">12</div>
                    <div class="data__text">Years Of Experiance</div>
                </div>

                <hr class="data-box__line">

                <div class="data">
                    <div class="data__number">85</div>
                    <div class="data__text">Success Project</div>
                </div>

                <hr class="data-box__line">

                <div class="data">
                    <div class="data__number">15</div>
                    <div class="data__text">Active Project</div>
                </div>

                <hr class="data-box__line">

                <div class="data">
                    <div class="data__number">95</div>
                    <div class="data__text">Happy Customers</div>
                </div>
            </div>
            <div class="articles-box center">
                <div class="articles-box__title">Articles & News</div>
                <div class="articles-box__text">It is a long established fact that a reader will be distracted by the of
                    readable content of a page when lookings at its layouts the points of using.</div>
                <div class="articles">
                    <div class="article">
                        <img class="article__img" src="@/assets/img/articleImage1.png" alt="img">
                        <div class="article__title">Kitchen Design</div>
                        <div class="article__text">Let’s Get Solution For Building Construction Work</div>
                        <div class="article__data-and-arrow">
                            <div class="article__date">26 December, 2022</div>
                            <img src="@/assets/img/arrow.svg" alt="arrow" class="article__arrow">
                        </div>
                    </div>
                    <div class="article">
                        <img class="article__img" src="@/assets/img/articleImage1.png" alt="img">
                        <div class="article__title">Kitchen Design</div>
                        <div class="article__text">Let’s Get Solution For Building Construction Work</div>
                        <div class="article__data-and-arrow">
                            <div class="article__date">26 December, 2022</div>
                            <img src="@/assets/img/arrow.svg" alt="arrow" class="article__arrow">
                        </div>
                    </div>
                    <div class="article">
                        <img class="article__img" src="@/assets/img/articleImage1.png" alt="img">
                        <div class="article__title">Kitchen Design</div>
                        <div class="article__text">Let’s Get Solution For Building Construction Work</div>
                        <div class="article__data-and-arrow">
                            <div class="article__date">26 December, 2022</div>
                            <img src="@/assets/img/arrow.svg" alt="arrow" class="article__arrow">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'home-main',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.top-box__content {
    margin-bottom: 140px;
    position: relative;
    background: url("@/assets/img/Banner.png") no-repeat center center;
    background-size: cover;
    height: 758px;
    width: 1200px;
    padding-top: 204px;
    padding-left: 46px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 21px;
}

.top-box__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 65px;
    font-weight: 400;
    line-height: 125%;
    width: 434px;
}

.top-box__text {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    width: 434px;
}

.top-box__button {
    border-radius: 18px;
    background: #292F36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    display: flex;
    padding: 26px 49px 26px 48px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
}

.average-box__title {
    color: #292F36;
    text-align: center;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.average-box__text {
    color: #4D5053;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    width: 737px;
    padding-left: calc(50% - 368.5px);
    padding-right: calc(50% - 368.5px);
    padding-bottom: 93px;
}

.projects {
    display: grid;
    grid-template-columns: repeat(2, 549px);
    row-gap: 56px;
    -moz-column-gap: 104px;
    column-gap: 104px;
    padding-bottom: 132px;
}

.item {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.item__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 217px;
}

.description__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
}

.description__text {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.data-box {
    background-color: #F4F0EC;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 76px;
    padding-top: 151px;
    padding-bottom: 151px;
    margin-bottom: 96px;
}

.data-box__line {
    width: 1px;
    height: 130px;
    background-color: #CDA274;
    border: none;
}

.data {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.data__number {
    color: #CDA274;
    font-family: "DM Serif Display", serif;
    font-size: 85px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1.7px;
}

.data__text {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.articles-box__title {
    color: #292F36;
    text-align: center;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.articles-box__text {
    color: #4D5053;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    width: 737px;
    padding-left: calc(50% - 405.5px);
    padding-right: calc(50% - 405.5px);
    padding-bottom: 93px;
}

.articles {
    display: flex;
    flex-direction: row;
    gap: 27px;
    margin-bottom: 96px;
}

.article {
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.article__title {
    width: 124px;
    height: 41px;
    border-radius: 8px 8px 8px 0px;
    background-color: #FFF;
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 200%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
    margin-top: -60px;
    margin-left: 20px;
    position: absolute;
    padding: 4px 5px 8px 11px;
    box-sizing: border-box;
}

.article__text {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
    width: 306px;
}

.article__data-and-arrow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.article__date {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.article__arrow {
    width: 52px;
    height: 52px;
}
</style>