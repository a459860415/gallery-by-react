require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class AppComponent extends React.Component {



  render() {

// 获取相关数据
    var imageDatas=require('../data/data.json');
    imageDatas=(function(data){
      for(var i=0;i<data.length;i++){
        var currentData=data[i];
        currentData.url= require('../images/'+currentData.fileName);
        data[i]=currentData;
      }
      return data;
    })(imageDatas);

    return (
          <section>
            {imageDatas}
          </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
