import { configureStore } from '@reduxjs/toolkit'
import MenuMbActive from '~/pages/HomePage/HomePageSlice'
import ModalSelect from '~/Components/ModalSelectClass/HandleModalSlice'
import CardClass from '~/Redux/CardClassSlice';
import BookByAge from '~/Redux/BookByAgeSlice'
import Topic from '~/Redux/TopicSlice'
import TopicModal from '~/Redux/CloseModalTopicSlice'
import VocabyLesson from '~/Redux/VocaByLessonSlice'
import PostIndexVoca from '~/Redux/PostIndexVocaSlice'
const rootReducer = {
    MenuMbActive: MenuMbActive,
    ModalSelect: ModalSelect,
    CardClass: CardClass,
    BookByAge: BookByAge,
    Topic: Topic,
    TopicModal: TopicModal,
    VocabyLesson: VocabyLesson,
    PostIndexVoca: PostIndexVoca
};
export const store = configureStore({
    reducer: rootReducer,
})