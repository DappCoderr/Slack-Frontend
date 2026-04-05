import { useParams, useNavigate } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useGetWorkspaceById } from '@/hooks/apis/workspace/useGetWorkspaceById';
import UserDetailsSkeleton from '@/components/atoms/UserDetailsSkeleton/UserDetailsSkeleton';

const UserDetails = () => {
  const { memberId, workspaceId } = useParams();
  const navigate = useNavigate();

  const { workspace, isLoading } = useGetWorkspaceById(workspaceId);

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading || !workspace) {
    return <UserDetailsSkeleton />;
  }

  // prettier-ignore
  const member = workspace?.members?.find((m) => m._id === memberId);

  if (!member) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <Button variant="ghost" onClick={handleBack} className="mb-4">
          ← Go Back
        </Button>

        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Member not found
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const userName = member?.userId?.username || 'User';
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 p-6 overflow-auto">
      <div className="max-w-2xl mx-auto">

        <div className="mb-6">
          <Button variant="ghost" onClick={handleBack} className="gap-2">
            ← Go Back
          </Button>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="bg-slack-Medium text-white rounded-t-xl">
            <CardTitle className="text-2xl">User Details</CardTitle>
          </CardHeader>

          <CardContent className="pt-8">
            <div className="flex flex-col items-center mb-8">
              <Avatar className="w-24 h-24 border-4 border-slack-Default shadow-md mb-4">
                <AvatarImage src={member?.userId?.avatar} alt={userName} />
                <AvatarFallback className="bg-gradient-to-br from-slack-Medium to-slack-Dark text-white text-2xl font-bold">
                  {userInitial}
                </AvatarFallback>
              </Avatar>

              <h2 className="text-2xl font-bold text-foreground">
                {userName}
              </h2>

              <p className="text-sm text-muted-foreground mt-1">
                @{member?.userId?.username}
              </p>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <p className="text-lg font-medium text-foreground break-all">
                  {member?.userId?.email || 'N/A'}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Role
                </label>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      member?.role === 'Admin'
                        ? 'bg-red-500'
                        : member?.role === 'Member'
                        ? 'bg-orange-500'
                        : 'bg-green-500'
                    }`}
                  />
                  <p className="text-lg font-medium text-foreground capitalize">
                    {member?.role || 'N/A'}
                  </p>
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Member ID
                </label>
                <p className="text-sm font-mono bg-slate-100 p-3 rounded-md text-foreground break-all">
                  {member?._id}
                </p>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={handleBack}>
                Close
              </Button>

              {member?.role !== 'Admin' && (
                <Button variant="destructive" disabled>
                  Remove Member
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDetails;