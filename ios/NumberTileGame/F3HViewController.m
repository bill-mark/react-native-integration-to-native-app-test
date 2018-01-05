//
//  F3HViewController.m
//  NumberTileGame
//
//  Created by Austin Zheng on 3/22/14.
//
//

#import "F3HViewController.h"
#import <React/RCTRootView.h>
#import "F3HAppDelegate.h"

#import "F3HNumberTileGameViewController.h"

@interface F3HViewController ()
@end

@implementation F3HViewController

- (void) viewDidLoad
{
    [super viewDidLoad];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(doPushNotification:) name:@"RNOpenOneVC" object:nil];
    
}

- (void)doPushNotification:(NSNotification *)notification{
    NSLog(@"成功收到===>通知");
    //    OneViewController *one = [[OneViewController alloc]init];
    //
    //
    [self dismissViewControllerAnimated:YES completion:^{
        
    }];
    
    //
    //注意不能在这里移除通知否则pus进去后有pop失效
}


- (IBAction)mybutton:(UIButton *)sender {
    NSLog(@"High Score Button Pressed");
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"RNHighScores"
                         initialProperties:nil
                             launchOptions: nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
    
}

- (IBAction)playGameButtonTapped:(id)sender {
    F3HNumberTileGameViewController *c = [F3HNumberTileGameViewController numberTileGameWithDimension:4
                                                                                         winThreshold:2048
                                                                                      backgroundColor:[UIColor whiteColor]
                                                                                          scoreModule:YES
                                                                                       buttonControls:NO
                                                                                        swipeControls:YES];
    [self presentViewController:c animated:YES completion:nil];
}

@end

