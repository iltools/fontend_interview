import { mount, type VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import Overview from './Overview.vue';

describe('Overview', () => {
  let wrapper: VueWrapper<InstanceType<typeof Overview>>;

  beforeEach(() => {
    wrapper = mount(Overview, { props: { icon: 'V' } });
  });

  it('should render', () => {
    expect(wrapper.html()).contain('V');
  });
});
