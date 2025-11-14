'use client';

import { useState } from "react";
import { Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface Notification {
  id: string;
  type: "alert" | "success" | "info";
  title: string;
  message: string;
  time: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "alert",
    title: "High Risk Claim Detected",
    message: "Claim #3 (Michael Chen) has risk score of 85",
    time: "5m ago",
  },
  {
    id: "2",
    type: "alert",
    title: "Eligibility Issue",
    message: "Patient eligibility inactive for claim #3",
    time: "12m ago",
  },
  {
    id: "3",
    type: "success",
    title: "Automation Complete",
    message: "15 claims processed successfully",
    time: "1h ago",
  },
  {
    id: "4",
    type: "info",
    title: "System Update",
    message: "Risk scoring model updated to v2.1",
    time: "3h ago",
  },
];

export function NotificationsPanel() {
  const [notifications] = useState<Notification[]>(mockNotifications);
  const unreadCount = notifications.length;

  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "info":
        return <Info className="h-4 w-4 text-blue-600" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-destructive text-destructive-foreground"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="end">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-base">Notifications</h3>
          <p className="text-xs text-muted-foreground mt-1">
            You have {unreadCount} unread notifications
          </p>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-sm text-muted-foreground">
              No notifications
            </div>
          ) : (
            <div className="divide-y">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex gap-3">
                    <div className="mt-0.5">{getIcon(notification.type)}</div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="p-2 border-t">
          <Button variant="ghost" className="w-full text-xs" size="sm">
            Mark all as read
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
