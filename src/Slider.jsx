import React from 'react';

import Item from './Item';
import './Slider.css';

class Slider extends React.PureComponent {

  state = {
    current: 1,
    numberItemShowItem: 2,
    data: [
      {
        key: 1,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.`
      },
      {
        key: 2, content: `rvived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.`
      },
      {
        key: 3,
        content: `Lorenchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.`
      },
      {
        key: 4,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem `
      },
      {
        key: 5,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem `
      },
      {
        key: 6,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem `
      }]
  };

  renderItem(item) {
    return (<Item content={item.content} />);
  }

  // next() {
  //   this.setState({ current: this.state.current + 1 });
  // }

  // prev() {
  //   this.setState({ current: this.state.current - 1 });
  // }

  getClassName(index, current) {
    if (index - current === 0) {
      return 'item-center';
    }
    if (index - current === -1) {
      return 'item-left';
    }
    if (index - current < -1) {
      return 'item-left item-opacity-zero';
    }
    if (index - current === 1) {
      return 'item-right';
    }
    if (index - current > 1) {
      return 'item-right item-opacity-zero';
    }
  }

  render() {
    const { current } = this.state;
    return (
      <div id="wheel-water-slider">
        {
          this.state.data.map((i, index) => {
            let classN = this.getClassName(index, current);

            // const classN = index === current ? 'item-center' : current - index > 0 && current - index <= numberItemShowItem ? 'item-left' : index - current > 0 && index - current <= numberItemShowItem ? 'item-right' : '';
            return (
              <div className={`slider-item ${classN}`} key={i.key} onClick={() => this.setState({ current: index })}>
                <Item content={i.content} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Slider;
