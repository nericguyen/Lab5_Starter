# Lab 5 - Starter

Eric Nguyen

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

You would NOT use a unit test for a message feature since it would probably require a lot of interactions between many parts, which
is not what unit testing is for.  If the message feature was not working properly, it would be difficult to pinpoint where exactly
the fault would come from.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, you would want to use a unit test to test the max length feature since this feature is probably encapsulated in a small amount of code
and can be easily bugtested.