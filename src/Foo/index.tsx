import { defineComponent } from 'vue';
import './Foo.less';

export const Foo = defineComponent({
  props: {
    /**
     * @description 标题
     */
    title: {
      type: String,
      default: '',
    },
  },
  setup({ title }) {
    return () => <div class="foo">{title}</div>;
  },
});
