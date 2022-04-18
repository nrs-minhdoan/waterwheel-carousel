import React from 'react';

class Item extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          borderRadius: '5px',
          backgroundColor: '#fff',
          padding: '50px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '440px',
          height: '300px'
        }}
      >
        <div
          style={{
            background: '#000',
            border: 'solid 3px #fff',
            boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.08)',
            width: '80px',
            height: '80px',
            borderRadius: '100%',
            position: 'absolute',
            left: '250px',
            top: '-40px'
          }}
        />
        <div
          style={{
            textAlign: 'justify'
          }}
        >
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Item;
