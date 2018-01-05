//
//  RCTModules.m
//  NumberTileGame
//
//  Created by bill on 2017/12/25.
//

#import "RCTModules.h"
#import <React/RCTBridge.h>
@implementation RCTModules
RCT_EXPORT_MODULE(RTModule)
//RN跳转原生界面
RCT_EXPORT_METHOD(RNOpenOneVC:(NSString *)msg){
    
    NSLog(@"RN传入原生界面的数据为:%@",msg);
    //主要这里必须使用主线程发送,不然有可能失效
    dispatch_async(dispatch_get_main_queue(), ^{
        [[NSNotificationCenter defaultCenter]postNotificationName:@"RNOpenOneVC" object:nil];
    });
}


@end

